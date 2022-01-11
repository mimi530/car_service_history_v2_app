import React from 'react'
import { StyleSheet, View } from 'react-native'
import * as Yup from "yup";

import AppScreen from '../components/AppScreen'
import AppText from '../components/AppText'
import Logo from '../components/Logo'
import routes from '../navigation/routes'
import AppFormField from '../components/forms/FormField'
import SubmitButton from '../components/forms/SubmitButton'
import Form from '../components/forms/Form'
import colors from '../constants/colors';

const LoginScreen = ({navigation}) => {

    const validationSchema = Yup.object().shape({
        email: Yup.string().required("Pole email jest wymagane").email("Email musi być prawidłowym adresem email").label("Email"),
        password: Yup.string().required("Pole hasło jest wymagane").min(8, "Hasło musi mieć zawierać 8 znaków").label("Hasło"),
      });

    return (
        <AppScreen>
            <View style={styles.container}>
                <Logo/>
                <View>
                    <Form
                        initialValues={{ name: "", email: "", password: "", password_confirmation: "" }}
                        onSubmit={(values) => console.log(values)}
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
                        <SubmitButton title="Zaloguj się" />
                    </Form>
                </View>
                <View style={styles.registerContainer}>
                    <AppText style={styles.registerText}>Nie masz jeszcze konta?</AppText>
                    <AppText style={styles.registerLink} onPress={() => navigation.navigate(routes.REGISTER)}>Zarejestruj się</AppText>
                </View>
            </View>
        </AppScreen>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        width: '100%',
        paddingVertical: 30,
        paddingHorizontal: 40,
    },
    registerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    registerText: {
        fontSize: 15,
        textAlign: 'center',
        color: colors.white
    },
    registerLink: {
        fontSize: 18,
        color: colors.primary
    }
})
