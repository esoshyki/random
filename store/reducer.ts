import { combineReducers } from "redux";
import { viewReducer } from "./view/view.reducer";

export const rootReducer = combineReducers({
    view: viewReducer
});