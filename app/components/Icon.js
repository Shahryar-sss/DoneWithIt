import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function Icon({
    name,
    size = 40,
    backgroundColor = "black",
    iconColor = "white",
}) {
    return (
        <View
            style={{
                width: size,
                height: size,
                backgroundColor: backgroundColor,
                borderRadius: size / 2,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <MaterialCommunityIcons
                name={name}
                size={size * 0.5}
                color={iconColor}
            />
        </View>
    );
}

const styles = StyleSheet.create({});

export default Icon;
