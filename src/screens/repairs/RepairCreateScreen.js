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

const RepairCreateScreen = ({ navigation, route }) => {
    const [loading, setLoading] = useState(false);
    const car = route.params.car;
    const validationSchema = Yup.object().shape({
        title: Yup.string()
            .required("Tytuł naprawy jest wymagany")
            .label("Tytuł naprawy"),
        milage: Yup.string().label("Przebieg"),
        description: Yup.string().label("Opis"),
    });

    const handleSubmit = async (repair) => {
        setLoading(true);
        const response = await repairsApi.addRepair(car, repair);
        setLoading(false);
        console.log(response);
        if (!response.ok) return alert("Nie udało się zapisać samochodu.");
        return navigation.push(routes.REPAIRS, { car });
    };

    return (
        <AppScreen>
            <LoadingScreen visible={loading} />
            <View style={styles.container}>
                <AppText style={styles.title}>Dodawanie naprawy</AppText>
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
                            placeholder="Tytuł naprawy"
                        />
                        <AppFormField
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="speedometer"
                            keyboardType="numeric"
                            name="milage"
                            placeholder="Przebieg"
                        />
                        <AppDatePicker name="date" />
                        <AppFormField
                            autoCorrect={true}
                            icon="dots-horizontal-circle-outline"
                            name="description"
                            placeholder="Opis"
                            multiline
                        />
                        <SubmitButton title="Dodaj naprawę" />
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
