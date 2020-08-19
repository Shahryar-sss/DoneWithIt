import { DefaultTheme } from "@react-navigation/native";
import colors from "../config/colors.json";

export default {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: colors.primary,
        background: colors.white,
    },
};
