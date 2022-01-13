import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import repairsApi from "../../api/repairs";
import AddButton from "../../components/AddButton";
import AppScreen from "../../components/AppScreen";
import AppText from "../../components/AppText";
import ListItem from "../../components/ListItem";
import ListItemDeleteAction from "../../components/ListItem/ListItemDeleteAction";
import ListItemEditAction from "../../components/ListItem/ListItemEditAction";
import colors from "../../constants/colors";
import routes from "../../navigation/routes";
import LoadingScreen from "../LoadingScreen";

const RepairsScreen = ({ navigation, route }) => {
    const [repairs, setRepairs] = useState([]);
    const [loading, setLoading] = useState(false)
    const car = route.params.car

    useEffect(() => {
        loadRepairs();
    }, []);

    const loadRepairs = async () => {
        setLoading(true)
        const response = await repairsApi.getRepairs(car);
        setLoading(false)
        
        if(!response.ok) return alert('Nie udało sie pobrać napraw.')
        setRepairs(response.data.repairs);
    };

    const handleDelete = async (repair) => {
        setLoading(true);
        const response = await repairsApi.deleteRepair(car, repair);
        setLoading(false);

        if (!response.ok) return alert("Nie udało się usunąć.");
        loadRepairs();
    };

    const handleEdit = async (repair) => {
        setLoading(true);
        const response = await repairsApi.editRepair(car, repair);
        setLoading(false);

        if (!response.ok) return alert("Nie udało się zaktualizować.");
        loadRepairs();
    }

    return (
        <AppScreen>
            <LoadingScreen visible={loading}/>
            <View style={styles.container}>
                <AppText style={styles.header}>{car.name}</AppText>
                <AppText style={styles.title}>Naprawy</AppText>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={repairs}
                    keyExtractor={(repair) => repair.uuid}
                    renderItem={({ item }) => (
                        <ListItem
                            title={item.title}
                            description={item.description}
                            date={item.date}
                            milage={item.milage}
                            renderRightActions={() => (
                                <View style={styles.actionsContainer}>
                                    <ListItemEditAction handleEdit={() => navigation.navigate(routes.EDIT_REPAIR, {car, repair: item})} />
                                    <ListItemDeleteAction handleDelete={() => handleDelete(item)} />
                                </View>
                            )}
                        />
                    )}
                    ItemSeparatorComponent={() => (
                        <View style={{ marginBottom: 10 }}></View>
                    )}
                />
            </View>
            <AddButton onPress={() => navigation.push(routes.ADD_REPAIR, {car})} />
        </AppScreen>
    );
};

export default RepairsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        paddingHorizontal: 40,
        paddingBottom: 30,
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: "bold",
        marginBottom: 20,
        paddingTop: 10,
    },
    header: {
        fontSize: 25,
        color: colors.primary,
        textAlign: 'center',
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
