import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

function Logo({ style }) {
    return (
        <View style={[styles.logoContainer, style]}>
            <Image
                resizeMode="contain"
                style={styles.logo}
                source={require("../assets/logo.png")}
            />
        </View>
    );
}

export default Logo;

const styles = StyleSheet.create({
    logo: {
        width: 300,
        height: 100,
    },
    logoContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
});
