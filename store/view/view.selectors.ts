import { State } from "../../types";

const stage = (state: State) => state.view.stage;
const hideContent = (state: State) => state.view.hideContent;

export const viewSelectors = {
    stage,
    hideContent
};