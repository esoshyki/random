import { IAction } from "../../types";
import { AppStages, ViewActions } from "./view.types";

export const SetAppStage = (payload: AppStages) : IAction => ({
    type: ViewActions.reducer.SetAppStage,
    payload
})

export const changeAppStage = (payload: AppStages) : IAction => ({
    type: ViewActions.sagas.ChangeAppStage,
    payload
})

export const setHideContent = (payload: boolean) : IAction => ({
    type: ViewActions.reducer.SetHideContent,
    payload,
})

export const toggleColorPicker = (payload?: number) : IAction => ({
    type: ViewActions.reducer.ToggleColorPickerFor,
    payload
})