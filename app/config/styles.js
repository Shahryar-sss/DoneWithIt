import { Platform } from "react-native";

import colors from './colors.json';

export default {
    text: {
        color: colors.dark,
        fontSize: 18,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    },
};
