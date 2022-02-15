import { StyleSheet } from "react-native"
import { colors } from "./colors"

export const theme = {
    colors: {
        background: colors.Honeydew,
        contrast: colors.Brown
    },

    typography: StyleSheet.create({
        error: {
            fontSize: 14,
            fontWeight: "800",
            color: colors.Orange
        }
    })
}