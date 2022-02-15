import { State } from "../../types";

const stage = (state: State) => state.view.stage;
const hideContent = (state: State) => state.view.hideContent;
const setColorPickerFor = (state: State) => state.view.showColorPickerFor

export const viewSelectors = {
    stage,
    hideContent,
    setColorPickerFor
};