import React from "react";
import { Modal, StyleSheet, View } from "react-native";
import AppText from "../components/AppText";
import colors from "../constants/colors";
import LottieView from "lottie-react-native";

const LoadingScreen = ({ visible }) => {
    return (
        <Modal visible={visible} style={styles.modal}>
            <View style={styles.container}>
                <LottieView
                    autoPlay={true}
                    loop={true}
                    source={require("../assets/animations/loading.json")}
                    style={styles.animation}
                />
            </View>
        </Modal>
    );
};

export default LoadingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        padding: 30,
        backgroundColor: colors.background,
        zIndex: 2,
    },
    animation: {
        width: 150,
    },
});
