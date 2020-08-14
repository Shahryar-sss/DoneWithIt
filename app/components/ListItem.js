import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import {MaterialCommunityIcons} from '@expo/vector-icons';

import AppText from "./AppText";

import colors from "../config/colors.json";

function ListItem({ image, title, subTitle, IconComponent, onPress, renderRightAction, style }) {
    return (
        <Swipeable renderRightActions={renderRightAction}>
            <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
                <View style={[styles.container, style]}>
                    {IconComponent}
                    {image && <Image source={image} style={styles.image} />}
                    <View style={styles.detailsContainer}>
                        <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
                        {subTitle && <AppText style={styles.subTitle} numberOfLines={2}>{subTitle}</AppText>}
                    </View>
                    <MaterialCommunityIcons name="chevron-right" size={25} color={colors.medium} />
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 15,
        alignItems: "center"
    },
    detailsContainer: {
        flex: 1,
        marginLeft: 10,
        justifyContent: "center"
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    subTitle: {
        color: colors.medium,
    },
    title: {
        fontWeight: "600",
    },
});

export default ListItem;
