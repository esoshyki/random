import { Text, Pressable, View, StyleSheet, Dimensions  } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { fadeIn } from "../../styles/animations";
import { Styles } from "../../styles";
import Button from "../../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { changeAppStage } from "../../store/view/view.actions";
import { AppStages } from "../../store/view/view.types";
import { select } from "../../store/select";
import { useEffect } from "react";
import BottomLayoutButton from "../../components/Button/BottomLayoutButton";

const Login = () => {

    const dispatch = useDispatch();

    const hideContent = useSelector(select.view.hideContent);

    const opacity = useSharedValue(1);

    const skipLogin = () => {
        dispatch(changeAppStage(AppStages.Items));
    };

    const animatedStyles = useAnimatedStyle(() => {
		return {
			opacity: opacity.value
		}
	});

    useEffect(() => {
        if (hideContent) {
            opacity.value = withTiming(0, { duration: 3000})
        }

    }, [hideContent])

    return (
        <Animated.View 
            style={[Styles.Layouts.centered, animatedStyles]}
            >
            <Text>Login</Text>

            <BottomLayoutButton 
                onPress={skipLogin}
                title="SKIP"
            />
        </Animated.View>
    )
};


export default Login;