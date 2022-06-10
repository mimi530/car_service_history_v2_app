import React from "react";
import { StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import AppScreen from "../components/AppScreen";
import AppText from "../components/AppText";
import colors from "../constants/colors";
import * as Linking from 'expo-linking';
import routes from "../navigation/routes";

const FeedbackScreen = ({ navigation }) => {
    const handleClick = () => {
        Linking.openURL('mailto:carstory@mdomzalski.pl');
    }
    return (
        <AppScreen>
            <View style={styles.container}>
                <AppText>
                    If you have any ideas or feedback, please send me an email at:
                </AppText>
                <TouchableOpacity onPress={handleClick}>
                    <AppText style={styles.email}>
                        carstory@mdomzalski.pl
                    </AppText>
                </TouchableOpacity>
            </View>
        </AppScreen>
    );
};

export default FeedbackScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        paddingVertical: 20,
        paddingHorizontal: 20
    },
    email: {
        marginTop: 10,
        color: colors.primary,
    }
});
