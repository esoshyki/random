import { all } from "redux-saga/effects";
import { viewSagas } from "./view/view.sagas";

export default function* rootSagas() {
    yield all([
        viewSagas()
    ])
}