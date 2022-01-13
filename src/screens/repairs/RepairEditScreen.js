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

const RepairEditScreen = ({ navigation, route }) => {
    const [loading, setLoading] = useState(false);
    const {car, repair} = route.params;

    const validationSchema = Yup.object().shape({
        title: Yup.string()
            .required("Tytuł naprawy jest wymagany")
            .label("Tytuł naprawy"),
        milage: Yup.string().label("Przebieg"),
        description: Yup.string().label("Opis"),
    });

    const handleSubmit = async (values) => {
        setLoading(true);
        const response = await repairsApi.editRepair(car, repair, values);
        setLoading(false);

        if (!response.ok) return alert("Nie udało się zaktualizować naprawy.");
        return navigation.push(routes.REPAIRS, { car });
    };

    return (
        <AppScreen>
            <LoadingScreen visible={loading} />
            <View style={styles.container}>
                <AppText style={styles.title}>Edycja samochodu</AppText>
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
                        <AppDatePicker name="date" startDate={repair.date} />
                        <AppFormField
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="dots-horizontal-circle-outline"
                            name="description"
                            placeholder="Nazwa samochodu"
                            multiline
                        />
                        <SubmitButton title="Zaktualizuj" />
                    </AppForm>
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
});
