import React from "react";
import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import {AppFormField, SubmitButton, AppForm} from '../components/forms';

const loginSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen() {
    return (
        <Screen style={styles.container}>
            <Image
                source={require("../assets/logo-red.png")}
                style={styles.logo}
            />
            <AppForm
                initialValues={{ email: "", password: "" }}
                onSubmit={(values) =>
                    console.log("Login form submitted ", values)
                }
                validationSchema={loginSchema}
            >
                <AppFormField
                    icon="email"
                    placeholder="Email"
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="email-address"
                    textContentType="emailAddress"
                    name="email"
                />
                <AppFormField
                    icon="lock"
                    placeholder="Password"
                    autoCapitalize="none"
                    autoCorrect={false}
                    textContentType="password"
                    secureTextEntry
                    name="password"
                />
                <SubmitButton title="Login" />
            </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20,
    },
});

export default LoginScreen;
