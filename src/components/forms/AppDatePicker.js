import { useFormikContext } from "formik";
import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import dayjs from "dayjs";

import colors from "../../constants/colors";
import AppText from "../AppText";

const AppDatePicker = ({name, startDate, ...otherProps}) => {
    const { setFieldValue } = useFormikContext();
    const [visible, setVisible] = useState(false);
    const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
    
    useEffect(() => {
        if (startDate) setDate(startDate)
        setFieldValue(name, date)
    }, [])

    const handle = (newDate) => {
        setVisible(false)
        setDate(dayjs(newDate).format('YYYY-MM-DD'))
        setFieldValue(name, dayjs(newDate).format('YYYY-MM-DD'))
    }

    return (
        <>
            <TouchableOpacity onPress={() => setVisible(true)}>
                <View style={styles.button}>
                    <MaterialCommunityIcons
                        name="calendar"
                        size={20}
                        color={colors.primary}
                        style={styles.icon}
                    />
                    <AppText style={styles.text}>
                        {date}
                    </AppText>
                </View>
            </TouchableOpacity>
            <DateTimePickerModal
                {...otherProps}
                isVisible={visible}
                mode="date"
                onConfirm={(date) => handle(date)}
                onCancel={() => setVisible(false)}
            />
        </>
    );
};

export default AppDatePicker;

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.secondary,
        borderRadius: 25,
        flexDirection: "row",
        padding: 15,
        marginVertical: 10,
        alignItems: "center",
    },
    icon: {
        marginRight: 10,
    },
    text: {
        color: colors.white,
        fontSize: 15,
        flex: 1,
    },
});
