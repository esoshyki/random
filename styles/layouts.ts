import { StyleSheet, Dimensions } from "react-native";

export const Layouts = StyleSheet.create({
    centered: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: Dimensions.get("screen").height,
        width: Dimensions.get("screen").width
    }
})