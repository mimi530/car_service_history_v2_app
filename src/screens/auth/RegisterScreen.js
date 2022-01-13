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
import useAuth from "../../auth/useAuth";
import ErrorMessage from "../../components/forms/AppErrorMessage";
import AppActivityIndicator from "../../components/AppActivityIndicator";

const RegisterScreen = ({ navigation }) => {
    const { logIn } = useAuth();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
    const validationSchema = Yup.object().shape({
        email: Yup.string().required().email().label("Email"),
        name: Yup.string().required().label("Nazwa użytkownika"),
        password: Yup.string().required().min(8).label("Hasło"),
        password_confirmation: Yup.string()
            .oneOf([Yup.ref("password"), null], "Hasła muszą się zgadzać")
            .label("Potwierdź hasło"),
    });

    const handleSubmit = async (userInfo) => {
        setError();
        setLoading(true);
        const response = await authApi.register(userInfo);
        if (!response.ok) {
            setLoading(false);
            if (response.data) setError(response.data.errors.email[0]);
            else {
                alert("Nie udało się zarejestrować.");
                console.log(response);
            }
            return;
        }
        const { data: auth } = await authApi.login(
            userInfo.email,
            userInfo.password
        );
        setLoading(false);
        logIn(auth);
    };

    return (
        <>
            <AppActivityIndicator visible={loading} />
            <AppScreen>
                <View style={styles.container}>
                    <Logo style={styles.logo} />
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
                                autoCapitalize="words"
                                autoCorrect={false}
                                icon="account"
                                name="name"
                                placeholder="Nazwa użytkownika"
                                textContentType="name"
                            />
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
                                textContentType="newPassword"
                            />
                            <AppFormField
                                autoCapitalize="none"
                                autoCorrect={false}
                                icon="lock"
                                name="password_confirmation"
                                placeholder="Potwierdź hasło"
                                secureTextEntry
                                textContentType="newPassword"
                            />
                            <ErrorMessage error={error} visible={error} />
                            <SubmitButton title="Zarejestruj się" />
                        </AppForm>
                    </View>
                    <View style={styles.loginContainer}>
                        <AppText style={styles.loginText}>
                            Masz już konto?
                        </AppText>
                        <AppText
                            style={styles.loginLink}
                            onPress={() => navigation.navigate(routes.LOGIN)}
                        >
                            Zaloguj się
                        </AppText>
                    </View>
                </View>
            </AppScreen>
        </>
    );
};

export default RegisterScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        width: "100%",
        paddingVertical: 30,
        paddingHorizontal: 40,
    },
    loginContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    loginText: {
        fontSize: 15,
        textAlign: "center",
        color: colors.white,
    },
    loginLink: {
        fontSize: 18,
        color: colors.primary,
    },
});
