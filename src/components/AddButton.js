import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../constants/colors";

const AddButton = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.addButton}>
            <MaterialCommunityIcons
                name="plus"
                size={50}
                color={colors.white}
            />
        </TouchableOpacity>
    );
};

export default AddButton;

const styles = StyleSheet.create({
    addButton: {
        backgroundColor: colors.primary,
        width: 60,
        height: 60,
        borderRadius: 45,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: 20,
        right: 20,
        zIndex: 1,
    },
});
