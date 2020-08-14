import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { AppFormField, AppForm, SubmitButton } from "../components/forms";

const registerSchema = Yup.object().shape({
    name: Yup.string().required().label("Name"),
    email: Yup.string().email().required().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen() {
    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{ name: "", email: "", password: "" }}
                onSubmit={(values) => console.log(values)}
                validationSchema={registerSchema}
            >
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
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
});

export default RegisterScreen;
