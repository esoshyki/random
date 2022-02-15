import Animated from "react-native-reanimated";
import { Item as ItemType } from "../../store/items/items.types";
import { StyleSheet, Text, View } from 'react-native'
import { colors } from "../../styles/colors";

interface Props {
    data: ItemType
}

const Item = ({ data } : Props) => {

    return (
        <Animated.View>
            <Text>{data.title}</Text>
            <View style={styles.colorCircle}>

            </View>
        </Animated.View>
    )
};

const styles = StyleSheet.create({
    itemContainer: {
        flex: 1
    },

    colorCircle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderColor: colors.contrast
    }
})

export default Item;