import { Alert, StyleSheet, TouchableHighlight, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../constants/colors";

export default function ListItemEditAction({ handleEdit }) {
    return (
        <TouchableHighlight
            style={styles.container}
            onPress={handleEdit}
        >
            <MaterialCommunityIcons name="pencil" size={30} />
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.warning,
        width: 60,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30,
        height: 60,
        marginHorizontal: 5,
    },
});
