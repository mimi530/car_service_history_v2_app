import { StyleSheet, View } from 'react-native'
import React from 'react'
import colors from '../constants/colors'
import AppText from './AppText'
import Constants from 'expo-constants'
import { useNetInfo } from "@react-native-community/netinfo";
import i18n from '../config/i18n'

function OfflineNotice(props) {
    const netInfo = useNetInfo();

    if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false)
        return (
            <View style={styles.container}>
                <AppText style={styles.text}>{i18n.t('No internet connection')}</AppText>
            </View>
        );

    return null;
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        height: 50,
        position: 'absolute',
        zIndex: 2,
        width: '100%',
        top: Constants.statusBarHeight,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
      color: colors.white,
    },
})

export default OfflineNotice