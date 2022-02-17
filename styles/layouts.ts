import { StyleSheet, Dimensions } from "react-native";

export const Layouts = StyleSheet.create({
    centered: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width,
        margin: 0,
        padding: 0,
    },
    flexVerticalStart: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width
    },
    upperLayout: {
        position: "absolute",
        left: 0,
        top: 0,
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
    }
})