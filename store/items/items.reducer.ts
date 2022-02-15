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

        case (ItemsAction.reducer.changeItemColor):
            const item : Item = payload;
            return {
                ...state,
                items: state.items.map(el => {
                    if (el.title === item.title) {
                        return {...item}
                    } else {
                        return el
                    }
                })
            }

        case (ItemsAction.reducer.toggleSelectedItem):

            return {
                ...state,
                selected: payload
            }
            

        default:
            return state
    }
}