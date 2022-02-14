import Animated from "react-native-reanimated";
import { fadeIn } from "../../styles/animations";
import { Text } from "react-native";

const Items = () => {

    return (
        <Animated.View entering={fadeIn.duration(3000)}>
            <Text>ITEMS</Text>
        </Animated.View>
    )
};

export default Items;