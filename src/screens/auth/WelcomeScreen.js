import React from "react";
import { StyleSheet, View } from "react-native";
import AppButton from "../../components/AppButton";
import AppScreen from "../../components/AppScreen";
import Logo from "../../components/Logo";
import i18n from "../../config/i18n";
import routes from "../../navigation/routes";

const WelcomeScreen = ({ navigation }) => {
    return (
        <AppScreen>
            <View style={styles.container}>
                <View></View>
                <Logo style={styles.logo} />
                <View>
                    <AppButton
                        color="primary"
                        title={i18n.t("Login")}
                        onPress={() => navigation.navigate(routes.LOGIN)}
                    />
                    <AppButton
                        color="secondary"
                        title={i18n.t("Register")}
                        onPress={() => navigation.navigate(routes.REGISTER)}
                    />
                </View>
            </View>
        </AppScreen>
    );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        width: "100%",
        padding: 30,
    },
});
