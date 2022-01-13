import { StyleSheet, View } from 'react-native';
import ListItemDeleteAction from './ListItemDeleteAction';
import ListItemEditAction from './ListItemEditAction';


export default function ListItemActions() {
  return (
    <View style={styles.container}>
        <ListItemEditAction/>
        <ListItemDeleteAction/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center'
    }
});
