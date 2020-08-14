import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors.json";
import defaultStyles from "../config/styles";

function AppTextInput({ icon, width="100%", ...otherProps }) {
    return (
        <View style={[styles.container, {width}]}>
            {icon && (
                <MaterialCommunityIcons
                    name={icon}
                    size={25}
                    color={colors.medium}
                    style={styles.icon}
                />
            )}
            <TextInput
                placeholderTextColor={colors.medium}
                style={defaultStyles.text}
                {...otherProps}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 25,
        width: "100%",
        padding: 15,
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10,
    },
    icon: {
        marginRight: 10,
    },
});

export default AppTextInput;
