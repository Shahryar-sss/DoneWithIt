import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

import colors from "../config/colors.json";

function AppButton({ title, onPress, color = "primary" }) {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.button, { backgroundColor: colors[color] }]}
        >
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        borderRadius: 25,
        padding: 15,
        marginVertical: 10
    },
    text: {
        color: colors.white,
        fontSize: 18,
        fontWeight: "bold",
        textTransform: "uppercase"
    }
});

export default AppButton;
