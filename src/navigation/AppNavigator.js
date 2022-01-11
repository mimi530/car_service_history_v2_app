import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CarNavigator from "./CarNavigator";
import AccountScreen from "../screens/AccountScreen";
import { StyleSheet } from "react-native";
import colors from "../constants/colors";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
    <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarStyle: styles.bar,
            tabBarInactiveTintColor: colors.white,
            tabBarLabelStyle: styles.label,
        }}
    >
        <Tab.Screen
            name="Garaż"
            component={CarNavigator}
            options={{
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons
                        name="car"
                        color={color}
                        size={size}
                    />
                ),
            }}
        />
        <Tab.Screen
            name="Konto"
            component={AccountScreen}
            options={{
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons
                        name="account"
                        color={color}
                        size={size}
                    />
                ),
            }}
        />
    </Tab.Navigator>
);

const styles = StyleSheet.create({
    bar: {
        backgroundColor: colors.secondary,
        borderTopColor: colors.secondary,
    },
    label: {
        fontSize: 14,
    },
});

export default AppNavigator;
