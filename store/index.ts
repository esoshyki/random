import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './reducer';
import createSagaMiddleware from "redux-saga";
import rootSagas from './sagas';

const sageMiddleWare = createSagaMiddleware();

const initStore = () => {
    const store = createStore(
        rootReducer,
        composeWithDevTools(
          applyMiddleware(sageMiddleWare)
        )
      );
    sageMiddleWare.run(rootSagas);

    return store
};

export const store = initStore()

