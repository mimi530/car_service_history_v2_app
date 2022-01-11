import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../constants/colors";
import AppText from "./AppText";

function ListItem({ title, description, milage, date }) {
    return (
        <View style={styles.container}>
            <AppText style={styles.title}>{title}</AppText>
            {description && (
                <AppText style={styles.description}>{description}</AppText>
            )}
            <View style={styles.footer}>
                <AppText style={styles.milage}>
                    {milage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") +
                        " km"}
                </AppText>
                {date && <AppText style={styles.date}>{date}</AppText>}
            </View>
        </View>
    );
}

export default ListItem;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.secondary,
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 20,
        marginBottom: 20,
    },
    date: {
        backgroundColor: colors.primary,
        paddingHorizontal: 10,
        borderRadius: 10,
        fontSize: 15,
    },
    description: {
        fontSize: 15,
    },
    milage: {
        fontSize: 15,
    },
    footer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 10,
    },
    title: {
        fontWeight: "bold",
        color: colors.primary,
        marginBottom: 10,
    },
});
