import React from "react";
import { createStackNavigator } from "@react-navigation/stack";;
import routes from "./routes";
import CarsScreen from "../screens/cars/CarsScreen";
import CarCreateScreen from "../screens/cars/CarCreateScreen";
import CarEditScreen from "../screens/cars/CarEditScreen";
import RepairsScreen from "../screens/repairs/RepairsScreen";
import RepairCreateScreen from "../screens/repairs/RepairCreateScreen";
import RepairEditScreen from "../screens/repairs/RepairEditScreen";

const Stack = createStackNavigator();

const CarNavigator = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={routes.CARS} component={CarsScreen} />
        <Stack.Screen name={routes.ADD_CAR} component={CarCreateScreen} />
        <Stack.Screen name={routes.EDIT_CAR} component={CarEditScreen} />
        <Stack.Screen name={routes.REPAIRS} component={RepairsScreen} />
        <Stack.Screen name={routes.ADD_REPAIR} component={RepairCreateScreen} />
        <Stack.Screen name={routes.EDIT_REPAIR} component={RepairEditScreen} />
    </Stack.Navigator>
);

export default CarNavigator;
