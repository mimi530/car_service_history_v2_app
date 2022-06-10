import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import useAuth from "../auth/useAuth";
import AppScreen from "../components/AppScreen";
import AppText from "../components/AppText";
import colors from "../constants/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import i18n from "../config/i18n";
import routes from "../navigation/routes";
import * as Linking from "expo-linking";

const SettingsScreen = ({ navigation }) => {
    const { user, logOut } = useAuth();

    const handleBuyCoffee = () => {
        Linking.openURL("https://buycoffee.to/carstoryapp");
    };

    return (
        <AppScreen>
            <View style={styles.container}>
                <View style={styles.account}>
                    <View style={styles.icon}>
                        <MaterialCommunityIcons
                            name="account"
                            size={40}
                            color={colors.primary}
                        />
                    </View>
                    <View style={styles.user}>
                        <AppText>{user.name}</AppText>
                        <AppText style={styles.email}>{user.email}</AppText>
                    </View>
                </View>
                <TouchableOpacity onPress={logOut}>
                    <View style={styles.logout}>
                        <MaterialCommunityIcons
                            name="logout"
                            size={25}
                            color={colors.primary}
                            style={styles.logoutIcon}
                        />
                        <AppText>{i18n.t("Logout")}</AppText>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate(routes.FEEDBACK);
                    }}
                >
                    <View style={styles.logout}>
                        <MaterialCommunityIcons
                            name="email-edit"
                            size={25}
                            color={colors.primary}
                            style={styles.logoutIcon}
                        />
                        <AppText>{i18n.t("Give feedback")}</AppText>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleBuyCoffee}>
                    <View style={styles.coffee}>
                        <MaterialCommunityIcons
                            name="coffee"
                            size={25}
                            color={colors.white}
                            style={styles.logoutIcon}
                        />
                        <View>
                            <AppText>{i18n.t("Like the app?")}</AppText>
                            <AppText>
                                {i18n.t("You can buy me a coffee :)")}
                            </AppText>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </AppScreen>
    );
};

export default SettingsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        paddingVertical: 20,
    },
    account: {
        backgroundColor: colors.secondary,
        width: "100%",
        flexDirection: "row",
        padding: 20,
        alignItems: "center",
    },
    logout: {
        backgroundColor: colors.secondary,
        width: "100%",
        flexDirection: "row",
        padding: 20,
        alignItems: "center",
        marginTop: 20,
    },
    logoutIcon: {
        marginRight: 10,
    },
    user: {
        flex: 1,
        flexDirection: "column",
    },
    email: {
        color: colors.primary,
    },
    icon: {
        height: 50,
        width: 50,
        borderRadius: 50,
        backgroundColor: colors.background,
        marginRight: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    coffee: {
        backgroundColor: colors.green,
        width: "100%",
        flexDirection: "row",
        padding: 20,
        alignItems: "center",
        marginTop: 20,
    },
});
