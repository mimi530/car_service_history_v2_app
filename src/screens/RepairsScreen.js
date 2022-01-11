import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AppScreen from '../components/AppScreen'

const RepairsScreen = ({navigation}) => {
    return (
        <AppScreen>
            <View style={styles.container}>
                <Text>Naprawy samochoda</Text>
            </View>
        </AppScreen>
    )
}

export default RepairsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        width: "100%",
        padding: 30
    },
})
