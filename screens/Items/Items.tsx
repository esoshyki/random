import Animated from "react-native-reanimated";
import { fadeIn } from "../../styles/animations";
import { Text, StyleSheet, Pressable, View, ScrollView, Dimensions } from "react-native";
import { Styles } from "../../styles";
import { useDispatch, useSelector } from "react-redux";
import { select } from "../../store/select";
import AddItem from "./ItemsAddItem";
import Item from "./Item";
import { colors } from "../../styles/colors";
import Button from "../../components/Button";
import { removeItem, toggleSelectedItems } from "../../store/items/items.action";
import ColorPicker from "../../components/ColorPicker/ColorPicker";

const Items = () => {

    const dispatch = useDispatch();

    const items = useSelector(select.items.items);
    const showColorPickerFor = useSelector(select.view.setColorPickerFor);
    const selected = useSelector(select.items.selected);

    const onPress = (idx: number) => {
        dispatch(toggleSelectedItems(
            selected === idx ? undefined : idx 
        ));
    };

    const onLongPress = (idx: number) => {
        const item = items[idx];
        dispatch(removeItem(item));
    };

    const start = () => {
        console.log("START!")
    };

    return (
        <Animated.View 
            style={[
                Styles.Layouts.flexVerticalStart,
                styles.container
            ]}
            entering={fadeIn.duration(3000)}>
            <Text style={styles.title}>ITEMS</Text>

            <AddItem />

            <ScrollView 
                scrollEnabled={true}
                contentContainerStyle={[
                    {
                        justifyContent: "flex-start", 
                        alignItems: "center",
                    },
                    
                ]}
                >
                <View style={styles.itemsContainer}>
                    {items.map((item, idx) => (
                        <Pressable 
                            key={idx} 
                            onPress={() => onPress(idx)}
                            style={{
                                backgroundColor: selected === idx ? 
                                    colors.Aqua : 
                                    "rgba(0, 0, 0, 0)"}
                            }
                            onLongPress={() => onLongPress(idx)}>
                            <Item 
                                idx={idx}
                                data={item}
                            />
                        </Pressable>
                    ))}
                </View>

            </ScrollView>

            <Button title="Get random" onPress={start}/>

            {typeof showColorPickerFor === "number" ? <ColorPicker /> : null}
            
        </Animated.View>
    )
};

const styles = StyleSheet.create({
    container: {
        position: "relative",
        paddingBottom: 40
    },
    itemsContainer: {
        justifyContent: "flex-start",
        alignItems: "center",
    },
    title: {
        color: colors.contrast,
        fontSize: 20,
        fontWeight: "700",
        marginVertical: 30
    }
})

export default Items;