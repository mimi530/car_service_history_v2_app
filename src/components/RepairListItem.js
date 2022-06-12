import React from "react";
import { StyleSheet, View, TouchableWithoutFeedback } from "react-native";
import colors from "../constants/colors";
import AppText from "./AppText";

function RepairListItem({ title, description, milage, date, onPress }) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <View style={styles.content}>
                    <AppText style={styles.title}>{title}</AppText>
                    {description && (
                        <AppText style={styles.description}>
                            {description}
                        </AppText>
                    )}
                    <View style={styles.footer}>
                        <AppText style={styles.milage}>
                            {milage
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " km"}
                        </AppText>
                        <AppText style={styles.date}>{date}</AppText>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

export default RepairListItem;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.secondary,
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 20,
        flexDirection: "row",
        alignItems: "center",
    },
    iconBox: {
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        height: 50,
        width: 50,
        marginRight: 10,
    },
    content: {
        flex: 1,
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
    titleBox: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    arrow: {
        opacity: 0.5,
    },
});
