import React from "react";
import { View, StyleSheet } from "react-native";
import Icon from "./Icon";
import AppText from "./AppText";
import { TouchableOpacity } from 'react-native';

function CategoryPickerItem({ item, onPress }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <Icon
                    backgroundColor={item.backgroundColor}
                    name={item.icon}
                    size={80}
                />
                <AppText style={styles.label}>{item.label}</AppText>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 25,
        paddingVertical: 15,
        alignItems: "center",
        width: "33%",
    },
    label: {
        marginTop: 5,
        textAlign: "center",
    },
});

export default CategoryPickerItem;
