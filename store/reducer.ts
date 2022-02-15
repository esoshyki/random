import { combineReducers } from "redux";
import { itemsReducer } from "./items/items.reducer";
import { viewReducer } from "./view/view.reducer";

export const rootReducer = combineReducers({
    view: viewReducer,
    items: itemsReducer,
});