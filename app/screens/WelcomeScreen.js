import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import AppButton from "../components/AppButton";
import routes from "../navigation/routes";

function WelcomeScreen({navigation}) {
    return (
        <ImageBackground
            blurRadius={3}
            style={styles.background}
            source={require("../assets/background.jpg")}
        >
            <View style={styles.logoContainer}>
                <Image
                    source={require("../assets/logo-red.png")}
                    style={styles.logo}
                />
                <Text style={styles.tagline}>Sell What You Don't Need</Text>
            </View>
            <View style={styles.buttonContainer}>
                <AppButton
                    title="Login"
                    onPress={() => navigation.navigate(routes.LOGIN_SCREEN)}
                />
                <AppButton
                    title="Register"
                    onPress={() => navigation.navigate(routes.REGISTER_SCREEN)}
                    color="secondary"
                />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    buttonContainer: {
        width: '100%',
        padding: 20
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: "center",
    },
    tagline: {
        fontSize: 20,
        fontWeight: "bold",
        paddingVertical: 20
    },
});

export default WelcomeScreen;
