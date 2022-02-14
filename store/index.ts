import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './reducer';
import createSagaMiddleware from "redux-saga";

const sageMiddleWare = createSagaMiddleware();

export const store = createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(sageMiddleWare)
    )
  );
