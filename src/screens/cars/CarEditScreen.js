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

const CarEditScreen = ({ navigation, route }) => {
    const [loading, setLoading] = useState(false);
    const { car, handleEdit } = route.params;
    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required("Nazwa samochodu jest wymagana")
            .label("Nazwa samochodu"),
        milage: Yup.string().label("Przebieg"),
    });

    const handleSubmit = (values) => {
        handleEdit(car, values);
        navigation.push(routes.CARS);
    };

    return (
        <AppScreen>
            <LoadingScreen visible={loading} />
            <View style={styles.container}>
                <AppText style={styles.title}>Edycja samochodu</AppText>
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
                            placeholder="Nazwa samochodu"
                        />
                        <AppFormField
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="speedometer"
                            keyboardType="numeric"
                            name="milage"
                            placeholder="Przebieg"
                        />
                        <SubmitButton title="Zaktualizuj" />
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
