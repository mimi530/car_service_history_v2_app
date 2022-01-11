import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AppScreen from '../components/AppScreen'

const AccountScreen = ({navigation}) => {
    return (
        <AppScreen>
            <View style={styles.container}>
                <Text>Konto</Text>
            </View>
        </AppScreen>
    )
}

export default AccountScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        width: "100%",
        padding: 30
    },
})
