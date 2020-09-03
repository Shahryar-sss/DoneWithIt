import React from "react";
import LottieView from "lottie-react-native";
import { View, StyleSheet } from "react-native";

function ActivityIndicator({ visible = false }) {
    if (!visible) return null;

    return (
        <View style={styles.overlay}>
            <LottieView
                source={require("../assets/animations/loader.json")}
                autoPlay={true}
                loop
            />
        </View>
    );
}

const styles = StyleSheet.create({
    overlay: {
        backgroundColor: "white",
        opacity: 0.8,
        width: "100%",
        height: "100%",
        position: "absolute",
        zIndex: 1
    }
})

export default ActivityIndicator;
