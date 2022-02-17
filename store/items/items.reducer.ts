import { ItemsAction, ItemsState, Item } from "./items.types";
import { IAction } from "../../types";

const initialState: ItemsState = {
    items: []
};

export const itemsReducer = (
    state = initialState,
    { type, payload } : IAction
) : ItemsState => {
    switch (type) {

        case (ItemsAction.reducer.addItem):
            return {
                ...state,
                items: [...state.items, payload]
            }

        case (ItemsAction.reducer.removeItem):
            return {
                ...state,
                items: state.items.filter(item => item.title !== payload.title)
            }

        case ItemsAction.reducer.removeItemById:
            return {
                ...state,
                items: state.items.filter((el, idx) => idx !== payload)
            };

        case (ItemsAction.reducer.changeItemColor):

            return {
                ...state,
                items: state.items.map((item, idx) => idx !== payload.idx ? item : ({
                    title: item.title,
                    color: payload.color
                }))
            }

        case ItemsAction.reducer.changeItemTitle:
            return {
                ...state,
                items: state.items.map((item, idx) => idx !== payload.idx ? item : ({
                    title: payload.title,
                    color: item.color
                }))
            }

        case (ItemsAction.reducer.toggleSelectedItem):

            return {
                ...state,
                selected: payload
            }

        case (ItemsAction.reducer.restore):
            return {
                items: []
            }

        default:
            return state
    }
}