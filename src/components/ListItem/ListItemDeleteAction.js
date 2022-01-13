import { Alert, StyleSheet, TouchableHighlight, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import carsApi from "../../api/cars";
import { useState } from "react";
import LoadingScreen from "../../screens/LoadingScreen";
import colors from "../../constants/colors";

export default function ListItemDeleteAction({ handleDelete }) {
    return (
        <TouchableHighlight
            style={styles.container}
            onPress={() => {
                Alert.alert("Czy na pewno chcesz usunąć?", null, [
                    { text: "Tak", onPress: handleDelete },
                    { text: "Nie" },
                ]);
            }}
        >
            <MaterialCommunityIcons name="trash-can" size={30} />
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.danger,
        width: 60,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30,
        height: 60,
        marginHorizontal: 5,
    },
});
