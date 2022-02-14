import { Keyframe } from "react-native-reanimated";

export const fadeIn = new Keyframe({
    0: {
        opacity: 0
    },
    100: {
        opacity: 1
    }
});

export const fadeOut = new Keyframe({
    0: {
        opacity: 1
    },
    100: {
        opacity: 0
    }
});