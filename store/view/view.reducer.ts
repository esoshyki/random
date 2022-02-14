import { IAction } from "../../types";
import { AppStages, ViewState } from "./view.types";

const init: ViewState = {
    stage: AppStages.intro
};

export const viewReducer = (state = init, action : IAction) => {
    const { type, payload } = action;
    switch (type) {
        default:
            return state
    }
}