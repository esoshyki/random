import { Pressable, Text } from "react-native";
import { Styles } from "../../styles";

interface ButtonProps {
    onPress: () => void;
    title: string;
}

export default function Button(props: ButtonProps) {
    const { onPress, title = 'Save' } = props;
    return (
      <Pressable style={Styles.Buttons.common} onPress={onPress}>
        <Text style={Styles.Buttons.commonText}>{title}</Text>
      </Pressable>
    );
  }