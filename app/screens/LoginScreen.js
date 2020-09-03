import React, { useState } from "react";
import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import {
    ErrorMessage,
    AppFormField,
    SubmitButton,
    AppForm,
} from "../components/forms";
import authApi from "../api/auth";
import useAuth from "../auth/useAuth";

const loginSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen() {
    const { logIn } = useAuth();
    const [loginFailed, setLoginFailed] = useState(false);

    const handleSubmit = async ({ email, password }) => {
        const result = await authApi.login(email, password);
        if (!result.ok) return setLoginFailed(true);

        setLoginFailed(false);
        logIn(result.data);
    };

    return (
        <Screen style={styles.container}>
            <Image
                source={require("../assets/logo-red.png")}
                style={styles.logo}
            />
            <AppForm
                initialValues={{ email: "", password: "" }}
                onSubmit={(values) => handleSubmit(values)}
                validationSchema={loginSchema}
            >
                <ErrorMessage
                    error="Invalid email and/or password"
                    visible={loginFailed}
                />
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
