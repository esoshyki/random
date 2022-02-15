import { IAction } from "../../types";
import { Item, ItemsAction } from "./items.types";

export const addItem = (payload: Item) : IAction => ({
    type: ItemsAction.reducer.addItem,
    payload
});

export const removeItem = (payload: Item) : IAction => ({
    type: ItemsAction.reducer.removeItem,
    payload
});