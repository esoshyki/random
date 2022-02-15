import Animated from "react-native-reanimated";
import { fadeIn } from "../../styles/animations";
import { Text, StyleSheet, View } from "react-native";
import { Styles } from "../../styles";
import { useSelector } from "react-redux";
import { select } from "../../store/select";
import AddItem from "./ItemsAddItem";
import Item from "./Item";

const Items = () => {

    const items = useSelector(select.items.items);

    console.log(items);

    return (
        <Animated.View 
            style={Styles.Layouts.centered}
            entering={fadeIn.duration(3000)}>
            <Text>ITEMS</Text>

            <Animated.View style={styles.itemsContainer}>
                {items && items.map((item, idx) => (
                    <View>
                        <Item 
                            key={idx}
                            data={item}
                        />
                    </View>
                ))}
            </Animated.View>

            <AddItem />
            
        </Animated.View>
    )
};

const styles = StyleSheet.create({
    itemsContainer: {
        justifyContent: "flex-start",
        alignItems: "center"
    }    
})

export default Items;