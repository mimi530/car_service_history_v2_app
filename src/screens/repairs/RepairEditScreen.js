import React, { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
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
import i18n from "../../config/i18n";
import AppButton from "../../components/AppButton";
import colors from "../../constants/colors";

const RepairEditScreen = ({ navigation, route }) => {
    const [loading, setLoading] = useState(false);
    const { car, repair } = route.params;

    const validationSchema = Yup.object().shape({
        title: Yup.string()
            .required(i18n.t("Title is required"))
            .label(i18n.t("Repair title")),
        milage: Yup.string().label(i18n.t("Mialge")),
        description: Yup.string().label(i18n.t("Description")),
    });

    const handleSubmit = async (values) => {
        setLoading(true);
        const response = await repairsApi.editRepair(car, repair, values);
        setLoading(false);

        if (!response.ok)
            return alert(i18n.t("There was an error, try again later"));
        return navigation.push(routes.REPAIRS, { car });
    };

    const handleDelete = async () => {
        setLoading(true);
        const response = await repairsApi.deleteRepair(car, repair);
        setLoading(false);

        if (!response.ok)
            return alert(i18n.t("There was an error, try again later"));
        return navigation.push(routes.REPAIRS, { car });
    };

    return (
        <AppScreen>
            <LoadingScreen visible={loading} />
            <View style={styles.container}>
                <AppText style={styles.title}>{i18n.t("Edit repair")}</AppText>
                <View>
                    <AppForm
                        initialValues={{
                            title: repair.title,
                            milage: repair.milage.toString(),
                            description: repair.description,
                        }}
                        enableReinitialize
                        onSubmit={handleSubmit}
                        validationSchema={validationSchema}
                    >
                        <AppFormField
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="wrench"
                            name="title"
                            placeholder={i18n.t("Repair title")}
                        />
                        <AppFormField
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="speedometer"
                            keyboardType="numeric"
                            name="milage"
                            placeholder={i18n.t("Milage")}
                        />
                        <AppDatePicker name="date" startDate={repair.date} />
                        <AppFormField
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="dots-horizontal-circle-outline"
                            name="description"
                            placeholder={i18n.t("Description")}
                            multiline
                        />
                        <SubmitButton title={i18n.t("Update")} />
                    </AppForm>
                    <AppButton
                        color="danger"
                        title={i18n.t("Delete repair")}
                        onPress={() => {
                            Alert.alert(i18n.t("Are you sure?"), null, [
                                {
                                    text: i18n.t("Yes"),
                                    onPress: handleDelete,
                                },
                                { text: i18n.t("No") },
                            ]);
                        }}
                    />
                </View>
                <View></View>
            </View>
        </AppScreen>
    );
};

export default RepairEditScreen;

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
    delete: {
        backgroundColor: colors.danger,
    },
});
