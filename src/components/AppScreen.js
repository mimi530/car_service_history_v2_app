import React from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'
import Constants from 'expo-constants'
import colors from '../constants/colors'

function AppScreen({children, style}) {
    return (
        <SafeAreaView style={[styles.screen, style]}>
          <View style={[styles.view, style]}>{children}</View>
        </SafeAreaView>
      );
    }
    
    const styles = StyleSheet.create({
      screen: {
        zIndex: 1,
        paddingTop: Constants.statusBarHeight,
        flex: 1,
      },
      view: {
        zIndex: 1,
        flex: 1,
      },
    });
    
export default AppScreen

