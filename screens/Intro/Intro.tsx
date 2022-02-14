import { useAssets } from 'expo-asset';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Animated, {
	useSharedValue,
	useAnimatedStyle,
	withTiming,
	withSequence,
  } from 'react-native-reanimated';
import { useDispatch } from 'react-redux';
import { SetAppStage } from '../../store/view/view.actions';
import { AppStages } from '../../store/view/view.types';


enum introStages {
  title = "title",
  congratz = "congratz",
  icon = "icon"
};

const Intro = () => {

	const dispatch = useDispatch();

    const [stage, setStage] = useState<introStages | null>(introStages.title);
	const [assets, error] = useAssets([
		require("../../assets/logo.png")
	]);

	const hidden = useSharedValue(0);

	const nextStage = () => {
		if (stage === introStages.title) {
			return setStage(introStages.congratz);
		}
		if (stage === introStages.congratz) {
			return setStage(introStages.icon)
		};
		if (stage === introStages.icon) {
			console.log("here");
			return dispatch(SetAppStage(AppStages.Login))
		}
	}

	const restoreOpacity = () => {
		hidden.value = withSequence(
			withTiming(1, { duration: 3000 }),
			withTiming(0, { duration: 3000 }));
	};

    const animatedStyles = useAnimatedStyle(() => {
		return {
			opacity: hidden.value
		}
	}, [null]);

	useEffect(() => {
		restoreOpacity();
		console.log(stage);
		setTimeout(() => {
			nextStage()
		}, 7000)
	}, [stage, dispatch])

    return (
        <View style={styles.container}>

        	{stage === introStages.title && (
				<Animated.View 
					style={animatedStyles}>
					<Text style={styles.title}>
						Shyki
					</Text>
				</Animated.View>
			)}

			{stage === introStages.congratz && (
				<Animated.View 
					style={animatedStyles}>
					<Text style={styles.title}>
						ESOTERIC-SOFT (c)
					</Text>
				</Animated.View>
			)}

			{stage === introStages.icon && (
				<Animated.View 
					style={[{
						width: 100,
						height: 80,
					},animatedStyles]}>
					{assets ? <Image 
						style={{
							width: 120,
							height: 100
						}}
						source={assets[0]} 
						width={100} 
						height={80} /> : null}
					<Text>Magic Random</Text>
				</Animated.View>
			)}

        <StatusBar style="auto" />
      </View>
    )
};

const styles = StyleSheet.create({
    container: {
      	flex: 1,  
      	backgroundColor: '#fff',
      	alignItems: 'center',
      	justifyContent: 'center',
    },
 
    title: {
      	fontWeight: "700"
    }
  });

export default Intro;