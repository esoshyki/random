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

export const removeItemById = (id: number) : IAction => ({
    type: ItemsAction.reducer.removeItemById,
    payload: id
});

export const changeItemColor = (payload: {
    color: string,
    idx: number
}) : IAction => ({
    type: ItemsAction.reducer.changeItemColor,
    payload
});

export const changeItemTitle = (payload: {
    title: string,
    idx: number
}) : IAction => ({
    type: ItemsAction.reducer.changeItemTitle,
    payload
});

export const toggleSelectedItems = (payload?: number) : IAction => ({
    type: ItemsAction.reducer.toggleSelectedItem,
    payload
});

export const itemsRestore = () : IAction => ({
    type: ItemsAction.reducer.restore,
})

