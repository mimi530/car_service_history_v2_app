import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import routes from "./routes";
import SettingsScreen from "../screens/SettingsScreen";
import FeedbackScreen from "../screens/FeedbackScreen";

const Stack = createStackNavigator();

const AccountNavigator = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={routes.ACCOUNT} component={SettingsScreen} />
        <Stack.Screen name={routes.FEEDBACK} component={FeedbackScreen} />
    </Stack.Navigator>
);

export default AccountNavigator;
