import { delay, put, takeEvery } from "redux-saga/effects";
import { IAction } from "../../types";
import { AppStages, ViewActions } from "./view.types";
import { SetAppStage, setHideContent } from './view.actions'

function* changeAppStageWorker(action: IAction) {
    const stage : AppStages = action.payload;
    yield put(setHideContent(true));
    yield delay(3000);
    yield put(SetAppStage(stage));
}

export function* viewSagas() {

    yield takeEvery(ViewActions.sagas.ChangeAppStage, changeAppStageWorker)
}