import { StyleSheet, Dimensions } from "react-native";
import { colors } from "./colors";

export const Inputs = StyleSheet.create({
    common: {
        width: Dimensions.get("window").width * 0.8,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderColor: colors.contrast,
        borderWidth: 2,
        margin: 10,
    }
})