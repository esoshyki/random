import { useState } from "react";
import { TextInput, Text } from "react-native";
import Animated from "react-native-reanimated";
import { Styles } from "../../styles";
import { NativeSyntheticEvent, TextInputChangeEventData, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { select } from "../../store/select";
import { Item } from "../../store/items/items.types";
import { colors } from "../../styles/colors";
import { addItem } from "../../store/items/items.action";

const AddItem = () => {

    const dispatch = useDispatch();

    const [text, setText] = useState("");
    const [error, setError] = useState("");

    const items = useSelector(select.items.items);

    const onChange = (e:  NativeSyntheticEvent<TextInputChangeEventData>) => {
        setText(e.nativeEvent.text);
    };

    const onSubmitEditing = () => {
        setError("");
        const item: Item = {
            title: text,
            color: colors.background
        };

        if (items.find(item => item.title === text)) {
            return setError("The item already exists")
        }
        dispatch(addItem(item));
        setText("");
    }

    return (
        <Animated.View style={{
            position: "relative"
        }}>
            <TextInput 
                style={[Styles.Inputs.common, {
                    elevation: 3
                }]}
                onChange={onChange}
                value={text}
                onSubmitEditing={onSubmitEditing}
            />

            <View>
                <Text style={{
                    position: "absolute",
                    top: 30,
                    left: 0,
                    color: colors.error
                    }}>
                    {error}
                </Text>
            </View>

        </Animated.View>
    )
};

export default AddItem;