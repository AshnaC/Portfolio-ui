import { createStore, applyMiddleware, compose } from "redux";
import { combineReducers } from "redux";
import reducerRegistry from "./reducerRegistry";
import sagaRegistry from "./sagaRegistry";
// import { fromJS } from "immutable";
import createSagaMiddleware from "redux-saga";

const initialState = {};
const sagaMiddleware = createSagaMiddleware();
const middleware = applyMiddleware(sagaMiddleware);

const combine = reducers => {
    return combineReducers(reducers);
};

const reducer = combine(reducerRegistry.getReducers());
const store = createStore(
    reducer,
    initialState,
    compose(
        middleware,
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : a => a
    )
);

reducerRegistry.setChangeListener(reducers => {
    store.replaceReducer(combine(reducers));
});
sagaRegistry.setChangeListener(sagas => {
    console.log("run saga");
    sagaMiddleware.run(sagas);
});
export default store;
