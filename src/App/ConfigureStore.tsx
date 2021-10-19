import * as _ from "lodash";

import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";

import AuthState from "../Modules/Auth/Store/AuthReducer";
import ComponentState from "../Modules/App/Store/ComponentReducer";
import ConfigAppState from "../Modules/App/Store/AppReducer";
import Language from "../Modules/Internationalization/languageProviderReducer";
import Saga from "../Modules/App/Saga/SagaMiddleware";
import { composeWithDevTools } from "redux-devtools-extension";
import { connectRouter } from "connected-react-router";
import createSagaMiddleware from "redux-saga";
import { reducer as formReducer } from "redux-form";
import history from "../App/History";
import storage from "redux-persist/lib/storage";
import { reducer as toastrReducer } from "react-redux-toastr";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["AuthState"]
};

const combinedReducer = combineReducers({
  AuthState,
  ComponentState,
  ConfigAppState,
  Language,
  router: connectRouter(history),
  toastr: toastrReducer,
  form: formReducer.plugin({})
});

const persistedReducer = persistReducer(persistConfig, combinedReducer);

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  process.env.NODE_ENV !== "production" &&
  typeof window === "object" &&
  _.has(window, "__REDUX_DEVTOOLS_EXTENSION_COMPOSE__")
    ? composeWithDevTools({ trace: true, traceLimit: 1000 })
    : compose;

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
export const persistor = persistStore(store);
sagaMiddleware.run(Saga);
