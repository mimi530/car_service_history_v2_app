import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import repairsApi from "../../api/repairs";
import AddButton from "../../components/AddButton";
import AppScreen from "../../components/AppScreen";
import AppText from "../../components/AppText";
import RepairListItem from "../../components/RepairListItem";
import i18n from "../../config/i18n";
import colors from "../../constants/colors";
import routes from "../../navigation/routes";
import LoadingScreen from "../LoadingScreen";

const RepairsScreen = ({ navigation, route }) => {
    const [repairs, setRepairs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
    const car = route.params.car;

    useEffect(() => {
        loadRepairs();
    }, []);

    const loadRepairs = async () => {
        setLoading(true);
        const response = await repairsApi.getRepairs(car);
        setLoading(false);

        if (!response.ok)
            return alert(i18n.t("There was an error, try again later"));
        setRepairs(response.data.repairs);
    };

    return (
        <AppScreen>
            <LoadingScreen visible={loading} />
            <View style={styles.container}>
                <AppText style={styles.header}>{car.name}</AppText>
                <AppText style={styles.title}>{i18n.t("Repairs")}</AppText>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={repairs}
                    keyExtractor={(repair) => repair.uuid}
                    renderItem={({ item }) => (
                        <RepairListItem
                            title={item.title}
                            description={item.description}
                            date={item.date}
                            milage={item.milage}
                            onPress={() => {
                                navigation.navigate(routes.EDIT_REPAIR, {
                                    car,
                                    repair: item,
                                });
                            }}
                        />
                    )}
                    ItemSeparatorComponent={() => (
                        <View style={{ marginBottom: 10 }}></View>
                    )}
                    refreshing={refreshing}
                    onRefresh={loadRepairs}
                />
            </View>
            <AddButton
                onPress={() => navigation.push(routes.ADD_REPAIR, { car })}
            />
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
        textAlign: "center",
        fontWeight: "bold",
        marginBottom: 20,
        paddingTop: 10,
    },
    header: {
        fontSize: 25,
        color: colors.primary,
        textAlign: "center",
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
