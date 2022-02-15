export enum AppStages {
    Intro = "intro",
    Login = "login",
    Items = "items",
    Wheel = "wheel",
};

export type ViewState = {
    stage: AppStages,
    hideContent: boolean;
    showColorPickerFor?: number;
};

enum ViewReducerActions {
    SetAppStage = "View/Set-App-Stage",
    SetHideContent = "View/Set-Hide-Content",
    ToggleColorPickerFor = "View/Toggle-Color-Picker-For",
};

enum ViewSagasActions {
    ChangeAppStage = "View/Saga-Change-App-Stage"
};

export const ViewActions = {
    reducer: ViewReducerActions,
    sagas: ViewSagasActions,
}