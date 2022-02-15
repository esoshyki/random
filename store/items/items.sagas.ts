import { takeEvery, put } from "redux-saga/effects";
import { IAction } from "../../types";
import { removeItemById, toggleSelectedItems } from "./items.action";
import { ItemsAction } from "./items.types";

function* changeItemTitleWorker (action: IAction) {
    const text = action.payload.title;
    const idx : number = action.payload.idx;
    if (!text) {
        yield put(removeItemById(idx));
        yield put(toggleSelectedItems());
    };
}

export default function* itemsSagas() {
    yield takeEvery(ItemsAction.reducer.changeItemTitle, changeItemTitleWorker)
} 