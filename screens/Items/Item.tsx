import Animated from "react-native-reanimated";
import { Item as ItemType } from "../../store/items/items.types";
import { StyleSheet, Text, View, Dimensions, Pressable } from 'react-native'
import { colors } from "../../styles/colors";
import { useDispatch } from "react-redux";
import { toggleColorPicker } from "../../store/view/view.actions";

interface Props {
    data: ItemType,
    idx: number
}

const Item = ({ data, idx } : Props) => {

    const dispatch = useDispatch();

    const onPress = () => {
        console.log(idx);
        dispatch(toggleColorPicker(idx))
    }

    return (
        <Animated.View style={
            styles.itemContainer
        }>  
        
            <Text>{data.title}</Text>


            <Pressable 
                onPress={onPress}
                style={[
                    styles.colorCircle,
                    { backgroundColor: data.color}
                    ]}>
                
            </Pressable>
        </Animated.View>
    )
};

const styles = StyleSheet.create({
    itemContainer: {
        shadowColor: "#f2f2f2",
        shadowRadius: 10,
        width: Dimensions.get("window").width * 0.8,
        marginVertical: 10,
        display: "flex",
        justifyContent: "center",
        position: "relative",
        borderColor: "#ddd0d0dc",
        borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 15,
    },

    colorCircle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderColor: colors.contrast,
        borderWidth: 1,
        position: "absolute",
        right: 20
    }
})

export default Item;