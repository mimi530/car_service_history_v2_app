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
import i18n from "../../config/i18n";

const RegisterScreen = ({ navigation }) => {
    const { logIn } = useAuth();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
    const validationSchema = Yup.object().shape({
        email: Yup.string().required().email().label(i18n.t('Email')),
        name: Yup.string().required().label(i18n.t('Name')),
        password: Yup.string().required().min(8).label(i18n.t('Password')),
        password_confirmation: Yup.string()
            .oneOf([Yup.ref("password"), null], i18n.t('Passwords must match'))
            .label(i18n.t('Repeat password')),
    });

    const handleSubmit = async (userInfo) => {
        setError();
        setLoading(true);
        const response = await authApi.register(userInfo);
        if (!response.ok) {
            setLoading(false);
            if (response.data) setError(response.data.errors.email[0]);
            else {
                alert(i18n.t('There was an error, try again later'));
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
                                placeholder={i18n.t('Name')}
                                textContentType="name"
                            />
                            <AppFormField
                                autoCapitalize="none"
                                autoCorrect={false}
                                icon="email"
                                keyboardType="email-address"
                                name="email"
                                placeholder={i18n.t('Email')}
                                textContentType="emailAddress"
                            />
                            <AppFormField
                                autoCapitalize="none"
                                autoCorrect={false}
                                icon="lock"
                                name="password"
                                placeholder={i18n.t('Password')}
                                secureTextEntry
                                textContentType="newPassword"
                            />
                            <AppFormField
                                autoCapitalize="none"
                                autoCorrect={false}
                                icon="lock"
                                name="password_confirmation"
                                placeholder={i18n.t('Repeat password')}
                                secureTextEntry
                                textContentType="newPassword"
                            />
                            <ErrorMessage error={error} visible={error} />
                            <SubmitButton title={i18n.t('Register')} />
                        </AppForm>
                    </View>
                    <View style={styles.loginContainer}>
                        <AppText style={styles.loginText}>
                            {i18n.t('Already have an account?')}
                        </AppText>
                        <AppText
                            style={styles.loginLink}
                            onPress={() => navigation.navigate(routes.LOGIN)}
                        >
                            {i18n.t('Log in')}
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
