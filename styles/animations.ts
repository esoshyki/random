import { Keyframe } from "react-native-reanimated";
import { settings } from "../settings";

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

export const Animations = {
    fadeIn: fadeIn.duration(settings.INTRO_ANIMATION_LENGTH),
    fadeOut: fadeOut.duration(settings.INTRO_ANIMATION_LENGTH)
}