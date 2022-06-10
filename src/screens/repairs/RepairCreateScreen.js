import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import AppScreen from "../../components/AppScreen";
import AppForm from "../../components/forms/AppForm";
import AppFormField from "../../components/forms/AppFormField";
import SubmitButton from "../../components/forms/SubmitButton";
import * as Yup from "yup";
import AppText from "../../components/AppText";
import repairsApi from "../../api/repairs";
import routes from "../../navigation/routes";
import LoadingScreen from "../LoadingScreen";
import AppDatePicker from "../../components/forms/AppDatePicker";
import dayjs from "dayjs";
import i18n from "../../config/i18n";

const RepairCreateScreen = ({ navigation, route }) => {
    const [loading, setLoading] = useState(false);
    const car = route.params.car;
    const validationSchema = Yup.object().shape({
        title: Yup.string()
            .required(i18n.t('Title is required'))
            .label(i18n.t('Repair title')),
        milage: Yup.string().label(i18n.t('Mialge')),
        description: Yup.string().label(i18n.t('Description')),
    });

    const handleSubmit = async (repair) => {
        setLoading(true);
        const response = await repairsApi.addRepair(car, repair);
        setLoading(false);

        if (!response.ok) return alert(i18n.t('There was an error, try again later'));
        return navigation.push(routes.REPAIRS, { car });
    };

    return (
        <AppScreen>
            <LoadingScreen visible={loading} />
            <View style={styles.container}>
                <AppText style={styles.title}>{i18n.t('Adding a repair')}</AppText>
                <View>
                    <AppForm
                        initialValues={{
                            title: "",
                            milage: "",
                            date: dayjs().format("YYYY.MM.DD"),
                            description: "",
                        }}
                        onSubmit={handleSubmit}
                        validationSchema={validationSchema}
                    >
                        <AppFormField
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="wrench"
                            keyboardType="email-address"
                            name="title"
                            placeholder={i18n.t('Repair title')}
                        />
                        <AppFormField
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="speedometer"
                            keyboardType="numeric"
                            name="milage"
                            placeholder={i18n.t('Milage')}
                        />
                        <AppDatePicker name="date" />
                        <AppFormField
                            autoCorrect={true}
                            icon="dots-horizontal-circle-outline"
                            name="description"
                            placeholder={i18n.t('Description')}
                            multiline
                        />
                        <SubmitButton title={i18n.t('Add repair')} />
                    </AppForm>
                </View>
                <View></View>
            </View>
        </AppScreen>
    );
};

export default RepairCreateScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        padding: 30,
        justifyContent: "space-between",
    },
    title: {
        fontSize: 25,
        fontWeight: "bold",
    },
    backLink: {
        flexDirection: "row",
        alignItems: "center",
    },
});
