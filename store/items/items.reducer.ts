import { ItemsAction, ItemsState } from "./items.types";
import { IAction } from "../../types";

const initialState: ItemsState = {
    items: []
};

export const itemsReducer = (
    state = initialState,
    { type, payload } : IAction
) => {
    switch (type) {

        case (ItemsAction.reducer.addItem):
            console.log(`item`, payload)
            return {
                ...state,
                items: [...state.items, payload]
            }

        case (ItemsAction.reducer.removeItem):
            return {
                ...state,
                items: state.items.filter(item => item.title !== payload.title)
            }

        default:
            return state
    }
}