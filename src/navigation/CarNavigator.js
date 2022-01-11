import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CarsScreen from "../screens/CarsScreen";
import RepairsScreen from "../screens/RepairsScreen";

const Stack = createStackNavigator();

const CarNavigator = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Cars" component={CarsScreen} />
        <Stack.Screen name="Repairs" component={RepairsScreen} />
    </Stack.Navigator>
);

export default CarNavigator;
