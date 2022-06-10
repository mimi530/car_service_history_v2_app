import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import carsApi from "../../api/cars";
import AddButton from "../../components/AddButton";
import AppScreen from "../../components/AppScreen";
import AppText from "../../components/AppText";
import ListItem from "../../components/ListItem";
import ListItemDeleteAction from "../../components/ListItem/ListItemDeleteAction";
import ListItemEditAction from "../../components/ListItem/ListItemEditAction";
import i18n from "../../config/i18n";
import routes from "../../navigation/routes";
import LoadingScreen from "../LoadingScreen";

const CarsScreen = ({ navigation }) => {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        loadCars();
    }, []);

    const loadCars = async () => {
        setLoading(true);
        const response = await carsApi.getCars();
        setLoading(false);
        if (!response.ok)
            return alert(i18n.t("There was an error, try again later"));
        setCars(response.data.cars);
    };

    const handleDelete = async (car) => {
        setLoading(true);
        const response = await carsApi.deleteCar(car);
        setLoading(false);

        if (!response.ok)
            return alert(i18n.t("There was an error, try again later"));
        loadCars();
    };

    const handleEdit = async (car, values) => {
        setLoading(true);
        const response = await carsApi.editCar(car, values);
        setLoading(false);

        if (!response.ok)
            return alert(i18n.t("There was an error, try again later"));
        loadCars();
    };

    return (
        <AppScreen>
            <LoadingScreen visible={loading} />
            <View style={styles.container}>
                <AppText style={styles.title}>{i18n.t("Cars")}</AppText>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={cars}
                    keyExtractor={(car) => car.uuid}
                    renderItem={({ item }) => (
                        <ListItem
                            title={item.name}
                            milage={item.milage}
                            icon="car-cog"
                            renderRightActions={() => (
                                <View style={styles.actionsContainer}>
                                    <ListItemEditAction
                                        handleEdit={() =>
                                            navigation.navigate(
                                                routes.EDIT_CAR,
                                                { car: item, handleEdit }
                                            )
                                        }
                                    />
                                    <ListItemDeleteAction
                                        handleDelete={() => handleDelete(item)}
                                    />
                                </View>
                            )}
                            onPress={() =>
                                navigation.push(routes.REPAIRS, {
                                    car: item,
                                })
                            }
                        />
                    )}
                    ItemSeparatorComponent={() => (
                        <View style={{ marginBottom: 10 }}></View>
                    )}
                />
            </View>
            <AddButton onPress={() => navigation.navigate(routes.ADD_CAR)} />
        </AppScreen>
    );
};

export default CarsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        paddingHorizontal: 40,
        paddingBottom: 30,
    },
    title: {
        fontSize: 25,
        fontWeight: "bold",
        marginBottom: 20,
        paddingTop: 10,
    },
    actionsContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
});
