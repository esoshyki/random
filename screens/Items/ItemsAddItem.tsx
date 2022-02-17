import { useEffect, useState } from "react";
import { TextInput, Text } from "react-native";
import { Styles } from "../../styles";
import { NativeSyntheticEvent, TextInputChangeEventData, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { select } from "../../store/select";
import { Item } from "../../store/items/items.types";
import { colors } from "../../styles/colors";
import { addItem, changeItemTitle } from "../../store/items/items.action";

const AddItem = () => {

    const dispatch = useDispatch();

    const [text, setText] = useState("");
    const [error, setError] = useState("");

    const items = useSelector(select.items.items);
    const selected = useSelector(select.items.selected);

    const onChange = (e:  NativeSyntheticEvent<TextInputChangeEventData>) => {

        if (typeof selected === "number") {
            dispatch(changeItemTitle({
                idx: selected,
                title: e.nativeEvent.text
            }))
        };
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

        if (!selected) {
            dispatch(addItem(item));
        }
        setText("");
    }

    useEffect(() => {
        if (typeof selected === "number") {
            setText(items[selected].title)
        };
    }, [selected]);

    return (
        <View style={{
        }}>
            <TextInput 
                style={[Styles.Inputs.common, {
                    elevation: 6,
                    zIndex: 6
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

        </View>
    )
};

export default AddItem;