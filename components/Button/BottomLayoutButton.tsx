import { StyleSheet, View, Dimensions } from "react-native";
import Button from '.';

interface Props {
    onPress: () => void;
    title: string;
}

const BottomLayoutButton = ({onPress, title} : Props) => {

    return (
        <View style={styles.buttonContainer}>
            <Button  
                onPress={onPress}
                title={title}
                />
        </View>
    )
};

const styles = StyleSheet.create({
    buttonContainer: {
        position: "absolute",
        bottom: 40,
        width: Dimensions.get("window").width - 20,
        marginHorizontal: 10
    }
})

export default BottomLayoutButton;