import React from "react";
import { View, Image, StyleSheet } from "react-native";

import AppText from "./AppText";
import colors from "../config/colors.json";

function Card({ image, title, subTitle }) {
    return (
        <View style={styles.card}>
            <Image source={image} style={styles.image} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title} numberOfLines={1} >{title}</AppText>
                <AppText style={styles.subTitle} numberOfLines={1} >{subTitle}</AppText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.white,
        borderRadius: 15,
        marginBottom: 20,
        overflow: "hidden",
    },
    detailsContainer: {
        padding: 20,
    },
    image: {
        width: "100%",
        height: 200,
    },
    title: {
        marginBottom: 7,
    },
    subTitle: {
        color: colors.secondary,
        fontWeight: "bold",
    },
});

export default Card;
