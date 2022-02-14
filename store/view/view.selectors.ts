import { State } from "../../types";

const stage = (state: State) => state.view.stage;

export const viewSelectors = {
    stage
};