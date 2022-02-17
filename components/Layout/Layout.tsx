import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import { Styles } from "../../styles";
import { colors } from "../../styles/colors";

interface Props {
    children: ReactNode
}

const Layout = ({ children } : Props) => {

    return (
        <View style={[
            styles.container
            ]}>
            {children}
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.Honeydew,
    }
})

export default Layout;