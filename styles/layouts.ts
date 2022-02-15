import { StyleSheet, Dimensions } from "react-native";

export const Layouts = StyleSheet.create({
    centered: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width
    }
})