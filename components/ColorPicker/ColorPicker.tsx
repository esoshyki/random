import { Dimensions, Button, StyleSheet, View, Pressable } from "react-native";
import Animated from "react-native-reanimated";
import { useDispatch, useSelector } from "react-redux";
import { changeItemColor } from "../../store/items/items.action";
import { select } from "../../store/select";
import { toggleColorPicker } from "../../store/view/view.actions";
import { Styles } from "../../styles";
import { Animations } from "../../styles/animations";
import { colors, getRandomColors } from "../../styles/colors";


const ColorPicker = () => {

    const dispatch = useDispatch();

    const colors = getRandomColors(40);

    const showColorPickerFor = useSelector(select.view.setColorPickerFor);
    const items = useSelector(select.items.items);
    
    const close = () => {
        dispatch(toggleColorPicker());
    };

    const onClick = (color: string) => {
        if (typeof showColorPickerFor === "number") {
            dispatch(changeItemColor({
                title: items[showColorPickerFor].title,
                color
            }))
        };
        close();
    };

    return (
        <Animated.View 
            entering={Animations.fadeIn}
            style={[
                Styles.Layouts.upperLayout,
                styles.colorPicker
            ]}
            >
                
            <View style={styles.close}>

                <View style={styles.colors}>
                    {colors && colors.map(color => {
                        return (
                            <Pressable 
                                onPress={() => onClick(color)}
                                key={color}
                                style={[
                                    styles.color,
                                    {
                                        backgroundColor: color
                                    }
                                ]} />
                        )
                    })}
                </View>

                <Button 
                    onPress={close} 
                    title="Close"/>   
            </View>

        </Animated.View>
    )
};

const styles = StyleSheet.create({
    colorPicker: {
        flex: 1,
        backgroundColor: colors.Black
    },
    close: {
        position: "relative",
        width: Dimensions.get("window").width - 40,
        marginHorizontal: 20,
        padding: 20,
        zIndex: 5,
        elevation: 5
    },
    colors: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        marginBottom: 20
    },
    color: {
        width: 40,
        height: 40,
        margin: 5,
    }
})

export default ColorPicker;