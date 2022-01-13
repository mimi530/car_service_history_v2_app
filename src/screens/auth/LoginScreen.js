import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import * as Yup from "yup";

import AppScreen from "../../components/AppScreen";
import AppText from "../../components/AppText";
import Logo from "../../components/Logo";
import routes from "../../navigation/routes";
import AppFormField from "../../components/forms/AppFormField";
import SubmitButton from "../../components/forms/SubmitButton";
import AppForm from "../../components/forms/AppForm";
import colors from "../../constants/colors";
import authApi from "../../api/auth";
import ErrorMessage from "../../components/forms/AppErrorMessage";
import useAuth from "../../auth/useAuth";
import AppActivityIndicator from "../../components/AppActivityIndicator";

const LoginScreen = ({ navigation }) => {
    const [loginFailed, setloginFailed] = useState(false);
    const [loading, setLoading] = useState(false);
    const { logIn } = useAuth();

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .required("Pole email jest wymagane")
            .email("Email musi być prawidłowym adresem email")
            .label("Email"),
        password: Yup.string()
            .required("Pole hasło jest wymagane")
            .min(8, "Hasło musi mieć zawierać 8 znaków")
            .label("Hasło"),
    });

    const handleSubmit = async ({ email, password }) => {
        setLoading(true);
        setloginFailed(false);
        const response = await authApi.login(email, password);
        setLoading(false);
        if (!response.ok) return setloginFailed(true);
        logIn(response.data);
    };

    return (
        <>
            <AppActivityIndicator visible={loading} />
            <AppScreen>
                <View style={styles.container}>
                    <Logo />
                    <View>
                        <AppForm
                            initialValues={{
                                name: "",
                                email: "",
                                password: "",
                                password_confirmation: "",
                            }}
                            onSubmit={handleSubmit}
                            validationSchema={validationSchema}
                        >
                            <AppFormField
                                autoCapitalize="none"
                                autoCorrect={false}
                                icon="email"
                                keyboardType="email-address"
                                name="email"
                                placeholder="Email"
                                textContentType="emailAddress"
                            />
                            <AppFormField
                                autoCapitalize="none"
                                autoCorrect={false}
                                icon="lock"
                                name="password"
                                placeholder="Hasło"
                                secureTextEntry
                                textContentType="password"
                            />
                            <ErrorMessage
                                error="Nieprawidłowy email lub hasło."
                                visible={loginFailed}
                            />
                            <SubmitButton title="Zaloguj się" />
                        </AppForm>
                    </View>
                    <View style={styles.registerContainer}>
                        <AppText style={styles.registerText}>
                            Nie masz jeszcze konta?
                        </AppText>
                        <AppText
                            style={styles.registerLink}
                            onPress={() => navigation.navigate(routes.REGISTER)}
                        >
                            Zarejestruj się
                        </AppText>
                    </View>
                </View>
            </AppScreen>
        </>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        width: "100%",
        paddingVertical: 30,
        paddingHorizontal: 40,
    },
    registerContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    registerText: {
        fontSize: 15,
        textAlign: "center",
        color: colors.white,
    },
    registerLink: {
        fontSize: 18,
        color: colors.primary,
    },
});
