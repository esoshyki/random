import React, { useEffect, useRef, useState } from "react";
import { Dimensions, StyleSheet, Image, Text, View, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { select } from "../../store/select";
import { colors } from "../../styles/colors";
import { CircleSector } from "../../types";
import { Item } from "../../store/items/items.types";
import utils from "../../utils";
import { Path, Svg } from "react-native-svg";
import { pointerImage } from "../../assets/images";
import { theme } from "../../styles/theme";
import { SetAppStage } from "../../store/view/view.actions";
import { AppStages } from "../../store/view/view.types";
import { itemsRestore } from "../../store/items/items.action";
import { Styles } from "../../styles";
import BottomLayoutButton from "../../components/Button/BottomLayoutButton";
import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing } from 'react-native-reanimated';


const getDiameter = () => Dimensions.get("window").width * 0.8;

const Wheel = () => {

    const dispatch = useDispatch();
    const items = useSelector(select.items.items);
    const degs = useSharedValue(0);

    const [started, setStarted] = useState(false);
    const [finishDeg, setFinishDeg] = useState(0);
    const [winner, setWinner] = useState("");

    const [message, setMessage] = useState("");


    const getWinner = () => {
        setStarted(false);
        const rest = finishDeg % 360;
        const newWinnerIdx = Math.floor(rest / (360 / items.length));
        setWinner(items[newWinnerIdx].title);
    }   

    const wheelOn = () => {
        setWinner("...");
        const random = 500 + (500 * Math.random());
        const finish = finishDeg + 500 * Math.random();
        setFinishDeg(finish);
        degs.value = withTiming(random, {
            duration: 5000,
            easing: Easing.out(Easing.exp),
        }, (finished) => {
            if (finished) {
                getWinner()
            }
        })
    };

    const animatedStyles = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    rotate: `${degs.value}deg`
                }
            ]
        }
    })

    const start = () => {
        console.log(started);
        console.log(started);
        if (!started) {
            wheelOn();
            setStarted(true);
        }
    };

    const slices : CircleSector[] = items.map((item : Item )=> ({
        percent: 1 / items.length,
        color: item.color
    }));

    const sectors = slices.map((slice, idx) => {
        const startPercent = slice.percent * idx;
        const endPercent = slice.percent * (idx + 1);
        const [ startX, startY ] = utils.getCoordinatesForPercent(startPercent);
        const [ endX, endY ] = utils.getCoordinatesForPercent(endPercent)
        const largeArcFlag = slice.percent > 0.5 ? 1 : 0;
        const pathData = [
            `M ${startX} ${startY}`, // Move
            `A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}`, // Arc
            'L 0 0', // Line
          ].join(' ');
          return <Path d={pathData} fill={slice.color} key={pathData}/>;
    });

    useEffect(() => {
        setTimeout(() => {
            setMessage("LIVE")
        }, 3000)
    }, [])

    return (
        <Animated.View 
            style={[
                Styles.Layouts.flexVerticalStart,
                styles.container
            ]}>

            <View>
                <Text>{message}</Text>
            </View>

            <View style={{position: "absolute", right: 20, top: 20}}>
                <Button 
                    title="Back"
                    onPress={() => {
                        dispatch(itemsRestore());
                        dispatch(SetAppStage(AppStages.Items));
                    }
                }
                    />
            </View>

            <View style={styles.winner}>
                {winner ? (
                    <Text style={[theme.typography.winner]}>
                        {winner}
                    </Text>) 
                : null}
            </View>
            
            <Image 
                source={pointerImage}
                width={80}
                height={80}
                style={styles.pointer}
                />

            <Animated.View style={[
                styles.wheel,
                animatedStyles
            ]} >
                
                <Svg 
                    height={getDiameter()}
                    width={getDiameter()}
                    viewBox="-1 -1 2 2"
                   
                >
                    {sectors}
                </Svg>

            </Animated.View>

            <BottomLayoutButton title="GO!" onPress={start}/>

        </Animated.View>
    )
};

const styles = StyleSheet.create({
    container: {
        position: "relative",
        paddingBottom: 40,
    },
    winner: {
        marginVertical: 20,
        height: 30,
    },
    pointer: {
        width: 80,
        height: 80,
        transform: [
            {rotate: "-135deg"}
        ],
        marginVertical: 40
    },
    wheel: {
        position: "relative",
        width: getDiameter(),
        height: getDiameter(),
        borderRadius: getDiameter() / 2,
        borderColor: colors.Violet,
        overflow: "hidden"
    }
});

export default Wheel;