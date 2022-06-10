import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CarNavigator from "./CarNavigator";
import AccountScreen from "../screens/SettingsScreen";
import { StyleSheet } from "react-native";
import colors from "../constants/colors";
import routes from "./routes";
import AccountNavigator from "./AccountNavigator";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
    <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarStyle: styles.bar,
            tabBarInactiveTintColor: colors.white,
            tabBarLabelStyle: styles.label,
            unmountOnBlur: true,
        }}
    >
        <Tab.Screen
            name={routes.GARAGE}
            component={CarNavigator}
            options={{
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons
                        name="car-side"
                        color={color}
                        size={size}
                    />
                ),
            }}
        />
        <Tab.Screen
            name={routes.SETTINGS}
            component={AccountNavigator}
            options={{
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons
                        name="cog"
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
