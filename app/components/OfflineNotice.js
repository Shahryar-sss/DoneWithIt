import React from "react";
import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { useNetInfo } from "@react-native-community/netinfo";

import AppText from "./AppText";
import colors from "../config/colors.json";

function OfflineNotice() {
    const netInfo = useNetInfo();

    if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false)
        return (
            <View style={styles.container}>
                <AppText style={styles.text}>No Internet Connection</AppText>
            </View>
        );
    else return null;
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        height: 50,
        position: "absolute",
        zIndex: 999,
        width: "100%",
        top: Constants.statusBarHeight,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        color: colors.white,
    },
});

export default OfflineNotice;
