import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import AppScreen from "../../components/AppScreen";
import AppForm from "../../components/forms/AppForm";
import AppFormField from "../../components/forms/AppFormField";
import SubmitButton from "../../components/forms/SubmitButton";
import * as Yup from "yup";
import AppText from "../../components/AppText";
import carsApi from "../../api/cars";
import routes from "../../navigation/routes";
import LoadingScreen from "../LoadingScreen";

const CarCreateScreen = ({ navigation }) => {
    const [loading, setLoading] = useState(false);

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required("Nazwa samochodu jest wymagana")
            .label("Nazwa samochodu"),
        milage: Yup.string().label("Przebieg"),
    });

    const handleSubmit = async (car) => {
        setLoading(true);
        const response = await carsApi.addCar(car);
        setLoading(false);

        if (!response.ok) return alert("Nie udało się zapisać samochodu.");
        return navigation.push(routes.CARS);
    };

    return (
        <AppScreen>
            <LoadingScreen visible={loading} />
            <View style={styles.container}>
                <AppText style={styles.title}>Dodawanie samochodu</AppText>
                <View>
                    <AppForm
                        initialValues={{ name: "", milage: "" }}
                        onSubmit={handleSubmit}
                        validationSchema={validationSchema}
                    >
                        <AppFormField
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="car"
                            keyboardType="email-address"
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
                        <SubmitButton title="Dodaj samochód" />
                    </AppForm>
                </View>
                <View></View>
            </View>
        </AppScreen>
    );
};

export default CarCreateScreen;

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
