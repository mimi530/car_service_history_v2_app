import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import AppScreen from "../components/AppScreen";
import AppText from "../components/AppText";
import ListItem from "../components/ListItem";

const CarsScreen = ({ navigation }) => {
    const cars = [
        {
            uuid: "066303f1-43cf-4d75-a957-0eb36df9d836",
            name: "Volvo v40 T4",
            milage: 200000,
        },
        {
            uuid: "066303f1-43cf-4d75-a957-0eb36df9d835",
            name: "Volvo v40 T4",
            milage: 200000,
        },
        {
            uuid: "066303f1-43cf-4d75-a957-0eb36df9d834",
            name: "Volvo v40 T4",
            milage: 200000,
        },
        {
            uuid: "066303f1-43cf-4d75-a957-0eb36df9d833",
            name: "Volvo v40 T4",
            milage: 200000,
        },
        {
            uuid: "066303f1-43cf-4d75-a957-0eb36df9d832",
            name: "Volvo v40 T4",
            milage: 200000,
        },
        {
            uuid: "066303f1-43cf-4d75-a957-0eb36df9d834",
            name: "Volvo v40 T4",
            milage: 200000,
        },
        {
            uuid: "066303f1-43cf-4d75-a957-0eb36df9d833",
            name: "Volvo v40 T4",
            milage: 200000,
        },
        {
            uuid: "066303f1-43cf-4d75-a957-0eb36df9d832",
            name: "Volvo v40 T4",
            milage: 200000,
        },
    ];

    return (
        <AppScreen>
            <View style={styles.container}>
                <AppText style={styles.title}>Samochody</AppText>
                <FlatList
                    data={cars}
                    keyExtractor={(car) => car.uuid}
                    renderItem={({ item }) => (
                        <ListItem
                            title={item.name}
                            description={item.description}
                            date={item.date}
                            milage={item.milage}
                        />
                    )}
                />
            </View>
        </AppScreen>
    );
};

export default CarsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        width: "100%",
        padding: 30,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 20,
    }
});
