import { Dimensions, StyleSheet, Image, Easing, Animated, Text } from "react-native";
import { useSelector } from "react-redux";
import BottomLayoutButton from "../../components/Button/BottomLayoutButton";
import { select } from "../../store/select";
import { Styles } from "../../styles";
import { colors } from "../../styles/colors";
import { CircleSector } from "../../types";
import { Item } from "../../store/items/items.types";
import utils from "../../utils";
import { Path, Svg } from "react-native-svg";
import { pointerImage } from "../../assets/images";
import { useRef, useState } from "react";
import { theme } from "../../styles/theme";

const getDiameter = () => Dimensions.get("window").width * 0.8;

const Wheel = () => {

    const degs = useRef(new Animated.Value(0));

    const [started, setStarted] = useState(false);
    const [finishDeg, setFinishDeg] = useState(0);
    const [winner, setWinner] = useState("");
    const items = useSelector(select.items.items);


    const getWinner = () => {
        setStarted(false);
        const rest = finishDeg % 360;
        const newWinnerIdx = Math.floor(rest / (360 / items.length));
        setWinner(items[newWinnerIdx].title);
    }   

    const wheelOn = () => {
        setWinner("...");
        const random = 0.5 + (0.5 * Math.random());
        const finish = finishDeg + 500 * Math.random();
        degs.current = new Animated.Value(0);
        setFinishDeg(finish);
        Animated.timing(degs.current, {
            toValue: random,
            duration: 5000,
            easing: Easing.out(Easing.ease),
            useNativeDriver: true
        }).start(() => {
            getWinner();
        });
        
    };

    const start = () => {
        if (!started) {
            wheelOn()
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

    return (
        <Animated.View 
            style={[
                Styles.Layouts.centered,
                { flex: 1, zIndex: 25 }
            ]}>

            {winner ? (
                <Text 
                    style={[
                        styles.winner,
                        theme.typography.winner
                    ]}
                    
                    >
                    {winner}</Text>) : null}

            <Image 
                source={pointerImage}
                width={80}
                height={80}
                style={styles.pointer}
                />

            <Animated.View style={[
                styles.wheel,
                {
                    transform: [
                        { rotate: degs.current.interpolate({
                            inputRange: [0, 1],
                            outputRange: ["0deg", "1000deg"]
                        }) }
                    ]
                }
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
    winner: {
        position: "absolute",
        top: 20,
    },
    pointer: {
        position: "absolute",
        top: 120,
        left: getDiameter() / 2 - 0,
        width: 80,
        height: 80,
        transform: [
            {rotate: "-135deg"}
        ]
    },
    wheel: {
        position: "relative",
        flexDirection: 'column',
        alignItems: "center",
        justifyContent: "center",
        width: getDiameter(),
        height: getDiameter(),
        borderRadius: getDiameter() / 2,
        borderWidth: 2,
        borderColor: colors.Violet
    }
});

export default Wheel;