import { ItemsState } from "../store/items/items.types";
import { ViewState } from "../store/view/view.types";

export interface IAction {
    type: string;
    payload?: any
};

export type State = {
    view: ViewState,
    items: ItemsState
};

export type CircleSector = {
    percent: number;
    color: string;
}