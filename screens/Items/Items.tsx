import Animated from "react-native-reanimated";
import { Animations, fadeIn } from "../../styles/animations";
import { Text, StyleSheet, Pressable, View, ScrollView } from "react-native";
import { Styles } from "../../styles";
import { useDispatch, useSelector } from "react-redux";
import { select } from "../../store/select";
import AddItem from "./ItemsAddItem";
import Item from "./Item";
import { colors } from "../../styles/colors";
import { removeItem, toggleSelectedItems } from "../../store/items/items.action";
import ColorPicker from "../../components/ColorPicker/ColorPicker";
import BottomLayoutButton from "../../components/Button/BottomLayoutButton";
import React, { useState } from "react";
import { theme } from "../../styles/theme";
import { SetAppStage } from "../../store/view/view.actions";
import { AppStages } from "../../store/view/view.types";

const Items = () => {

    const dispatch = useDispatch();

    const items = useSelector(select.items.items);
    const showColorPickerFor = useSelector(select.view.setColorPickerFor);
    const selected = useSelector(select.items.selected);
    const [error, setError] = useState("");

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
        if (items.length <= 1) {
            setError("The wheel should have at least two items")
        } else {
            dispatch(SetAppStage(AppStages.Wheel))
        }
    };

    return (
        <Animated.View 
            style={[
                Styles.Layouts.flexVerticalStart,
                styles.container
            ]}
            entering={Animations.fadeIn}>
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

                {error ? (
                    <Text style={theme.typography.error}>
                        {error}
                    </Text>) : null 
                }

            </ScrollView>
            

            <BottomLayoutButton 
                title="Start"
                onPress={start}
            />

            {typeof showColorPickerFor === "number" ? <ColorPicker /> : null}
            
        </Animated.View>
    )
};

const styles = StyleSheet.create({
    container: {
        position: "relative",
        paddingBottom: 40,
        zIndex: 20
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