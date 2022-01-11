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

const RegisterScreen = ({navigation}) => {

    const validationSchema = Yup.object().shape({
        email: Yup.string().required().email().label("Email"),
        name: Yup.string().required().label("Nazwa użytkownika"),
        password: Yup.string().required().min(8).label("Hasło"),
        password_confirmation: Yup.string().oneOf([Yup.ref('password'), null], 'Hasła muszą się zgadzać').label("Potwierdź hasło"),
      });

    return (
        <AppScreen>
            <View style={styles.container}>
                <Logo style={styles.logo}/>
                <View>
                    <Form
                        initialValues={{ name: "", email: "", password: "", password_confirmation: "" }}
                        onSubmit={(values) => console.log(values)}
                        validationSchema={validationSchema}
                    >
                        <AppFormField
                            autoCapitalize
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
                        <SubmitButton title="Zarejestruj się" />
                    </Form>
                </View>
                <View style={styles.loginContainer}>
                    <AppText style={styles.loginText}>Masz już konto?</AppText>
                    <AppText style={styles.loginLink} onPress={() => navigation.navigate(routes.LOGIN)}>Zaloguj się</AppText>
                </View>
            </View>
        </AppScreen>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        width: '100%',
        paddingVertical: 30,
        paddingHorizontal: 40,
    },
    loginContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginText: {
        fontSize: 15,
        textAlign: 'center',
        color: colors.white
    },
    loginLink: {
        fontSize: 18,
        color: colors.primary
    }
})
