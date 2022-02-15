import { useState } from "react";
import { TextInput } from "react-native";
import Animated from "react-native-reanimated";
import { Styles } from "../../styles";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { select } from "../../store/select";
import { Item } from "../../store/items/items.types";
import { colors } from "../../styles/colors";
import { addItem } from "../../store/items/items.action";

const AddItem = () => {

    const dispatch = useDispatch();

    const [text, setText] = useState("");

    const onChange = (e:  NativeSyntheticEvent<TextInputChangeEventData>) => {
        setText(e.nativeEvent.text);
    };

    const onSubmitEditing = () => {
        console.log("OK")
        const item: Item = {
            title: text,
            color: colors.background
        };
        dispatch(addItem(item));
    }

    return (
        <Animated.View>
            <TextInput 
                style={Styles.Inputs.common}
                onChange={onChange}
                value={text}
                onSubmitEditing={onSubmitEditing}
            />
        </Animated.View>
    )
};

export default AddItem;