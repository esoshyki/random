import { ViewState } from "../store/view/view.types";

export interface IAction {
    type: string;
    payload?: any
};

export type State = {
    view: ViewState
};