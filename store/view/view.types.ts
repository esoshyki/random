export enum AppStages {
    Intro = "intro",
    Login = "login",
    Items = "items"
};

export type ViewState = {
    stage: AppStages,
    hideContent: boolean;
};

enum ViewReducerActions {
    SetAppStage = "View/Set-App-Stage",
    SetHideContent = "View/Set-Hide-Content"
};

enum ViewSagasActions {
    ChangeAppStage = "View/Saga-Change-App-Stage"
};

export const ViewActions = {
    reducer: ViewReducerActions,
    sagas: ViewSagasActions,
}