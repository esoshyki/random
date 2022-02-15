import { Dimensions, StyleSheet } from "react-native";
import Animated from "react-native-reanimated";
import { useSelector } from "react-redux";
import BottomLayoutButton from "../../components/Button/BottomLayoutButton";
import { select } from "../../store/select";
import { Styles } from "../../styles";
import { Animations } from "../../styles/animations";
import { colors } from "../../styles/colors";

const Wheel = () => {

    const start = () => {

    };

    const items = useSelector(select.items.items);

    console.log(items)

    return (
        <Animated.View 
            style={Styles.Layouts.centered}
            entering={Animations.fadeIn}>

            <Animated.View style={styles.wheel}>

            </Animated.View>

            <BottomLayoutButton title="GO!" onPress={start}/>

        </Animated.View>
    )
};

const styles = StyleSheet.create({
    wheel: {
        position: "relative",
        overflow: "hidden",
        width: Dimensions.get("window").width * 0.8,
        height: Dimensions.get("window").width * 0.8,
        borderRadius: Dimensions.get("window").width * 0.4,
        borderWidth: 2,
        borderColor: colors.Violet
    }
});

export default Wheel;