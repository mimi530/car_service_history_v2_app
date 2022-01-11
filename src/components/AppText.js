import React from "react";
import { Platform, StyleSheet, Text } from "react-native";
import colors from "../constants/colors";

function AppText({ children, style, ...otherProps }) {
  return (
    <Text style={[styles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    color: colors.white,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  }
})


export default AppText;
