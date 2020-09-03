import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import {
    AppFormField,
    AppForm,
    SubmitButton,
    ErrorMessage,
} from "../components/forms";
import useAuth from "../auth/useAuth";
import authApi from "../api/auth";
import usersApi from "../api/user";
import useApi from "../hooks/useApi";
import ActivityIndicator from "../components/ActivityIndicator";

const registerSchema = Yup.object().shape({
    name: Yup.string().required().label("Name"),
    email: Yup.string().email().required().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen() {
    const register = useApi(usersApi.register);
    const login = useApi(authApi.login);
    const auth = useAuth();
    const [error, setError] = useState();

    const handleSubmit = async (userInfo) => {
        const result = await register.request(userInfo);
        if (!result.ok) {
            if (result.data) setError(result.data.error);
            else {
                setError("An unexpected error has occurred");
                console.log(result);
            }
            return;
        }

        const { data: authToken } = await login.request(
            userInfo.email,
            userInfo.password
        );
        auth.logIn(authToken);
    };

    return (
        <>
        <ActivityIndicator visible={register.loading || login.loading} />
            <Screen style={styles.container}>
                <AppForm
                    initialValues={{ name: "", email: "", password: "" }}
                    onSubmit={(values) => handleSubmit(values)}
                    validationSchema={registerSchema}
                >
                    <ErrorMessage error={error} visible={error} />
                    <AppFormField
                        name="name"
                        placeholder="Name"
                        autoCapitalize="words"
                        autoCorrect={false}
                        icon="account"
                    />
                    <AppFormField
                        name="email"
                        placeholder="Email"
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="email"
                        keyboardType="email-address"
                        textContentType="emailAddress"
                    />
                    <AppFormField
                        name="password"
                        placeholder="Password"
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="lock"
                        secureTextEntry
                        textContentType="password"
                    />
                    <SubmitButton title="Register" />
                </AppForm>
            </Screen>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
});

export default RegisterScreen;
