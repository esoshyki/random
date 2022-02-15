import { IAction } from "../../types";
import { AppStages, ViewActions, ViewState } from "./view.types";

const init: ViewState = {
    stage: AppStages.Intro,
    hideContent: false,
};

export const viewReducer = (state = init, action : IAction) : ViewState => {
    const { type, payload } = action;
    switch (type) {
        case (ViewActions.reducer.SetAppStage):
            return ({
                ...state,
                stage: payload
            })

        case (ViewActions.reducer.SetHideContent):
            return ({
                ...state,
                hideContent: payload
            })

        case (ViewActions.reducer.ToggleColorPickerFor):
            return ({
                ...state,
                showColorPickerFor: payload
            })
        default:
            return state
    }
}