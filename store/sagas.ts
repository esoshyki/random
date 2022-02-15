import { all } from "redux-saga/effects";
import itemsSagas from "./items/items.sagas";
import { viewSagas } from "./view/view.sagas";

export default function* rootSagas() {
    yield all([
        viewSagas(),
        itemsSagas()
    ])
}