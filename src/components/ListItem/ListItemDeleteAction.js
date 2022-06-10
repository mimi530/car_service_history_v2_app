import { Alert, StyleSheet, TouchableHighlight, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import carsApi from "../../api/cars";
import { useState } from "react";
import LoadingScreen from "../../screens/LoadingScreen";
import colors from "../../constants/colors";
import i18n from "../../config/i18n";

export default function ListItemDeleteAction({ handleDelete }) {
    return (
        <TouchableHighlight
            style={styles.container}
            onPress={() => {
                Alert.alert(i18n.t('Are you sure?'), null, [
                    { text: i18n.t('Yes'), onPress: handleDelete },
                    { text: i18n.t('No') },
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
