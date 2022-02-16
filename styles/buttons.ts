import { StyleSheet } from "react-native";
import { colors } from "./colors";

export const Buttons = StyleSheet.create({
    common: {
        margin: 20,
        paddingHorizontal: 30,
        paddingVertical: 20,
        borderRadius: 35,
        backgroundColor: colors.blue,
        elevation: 6,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },

    commonText: {
        color: "#fff",
    }
})