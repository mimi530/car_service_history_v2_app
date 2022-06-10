import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import AppScreen from "../../components/AppScreen";
import AppForm from "../../components/forms/AppForm";
import AppFormField from "../../components/forms/AppFormField";
import SubmitButton from "../../components/forms/SubmitButton";
import * as Yup from "yup";
import AppText from "../../components/AppText";
import LoadingScreen from "../LoadingScreen";
import routes from "../../navigation/routes";
import i18n from "../../config/i18n";

const CarEditScreen = ({ navigation, route }) => {
    const [loading, setLoading] = useState(false);
    const { car, handleEdit } = route.params;
    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required(i18n.t('Car name is required'))
            .label(i18n.t('Car name')),
        milage: Yup.string().label(i18n.t('Milage')),
    });

    const handleSubmit = (values) => {
        handleEdit(car, values);
        navigation.push(routes.CARS);
    };

    return (
        <AppScreen>
            <LoadingScreen visible={loading} />
            <View style={styles.container}>
                <AppText style={styles.title}>{i18n.t('Edit car')}</AppText>
                <View>
                    <AppForm
                        initialValues={{
                            name: car.name,
                            milage: car.milage.toString(),
                        }}
                        enableReinitialize
                        onSubmit={handleSubmit}
                        validationSchema={validationSchema}
                    >
                        <AppFormField
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="car"
                            name="name"
                            placeholder={i18n.t('Car name')}
                        />
                        <AppFormField
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="speedometer"
                            keyboardType="numeric"
                            name="milage"
                            placeholder={i18n.t('Milage')}
                        />
                        <SubmitButton title={i18n.t('Update')} />
                    </AppForm>
                </View>
                <View></View>
            </View>
        </AppScreen>
    );
};

export default CarEditScreen;

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
