import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import colors from '../constants/colors'

function AppScreen({children}) {
    return (
        <SafeAreaView style={styles.screen}>
            {children}
        </SafeAreaView>
    )
}

export default AppScreen

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%",
        backgroundColor: colors.background
    },
})
