import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors.json";

function ViewImageScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}>
                <MaterialCommunityIcons
                    name="close"
                    size={35}
                    color={colors.white}
                />
            </View>
            <View style={styles.deleteIcon}>
                <MaterialCommunityIcons
                    name="trash-can-outline"
                    size={32}
                    color={colors.white}
                />
            </View>
            <Image
                resizeMode="contain"
                source={require("../assets/chair.jpg")}
                style={styles.image}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    closeIcon: {
        // width: 50,
        // height: 50,
        // backgroundColor: colors.primary,
        position: "absolute",
        top: 30,
        left: 30,
    },
    deleteIcon: {
        // width: 50,
        // height: 50,
        // backgroundColor: colors.secondary,
        position: "absolute",
        top: 30,
        right: 30,
    },
    container: {
        flex: 1,
        backgroundColor: colors.black,
    },
    image: {
        width: "100%",
        height: "100%",
    },
});

export default ViewImageScreen;
