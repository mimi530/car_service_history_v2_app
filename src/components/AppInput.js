import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../constants/colors";

function AppInput({ icon, width = "100%", value, ...otherProps }) {
  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={colors.primary}
          style={styles.icon}
        />
      )}
      <TextInput
        placeholderTextColor={colors.white}
        style={styles.text}
        value={value}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
    alignItems: 'center',
  },
  text: {
    color: colors.white,
    fontSize: 15,
    flex: 1
  },
  icon: {
    marginRight: 10,
  },
});

export default AppInput;
