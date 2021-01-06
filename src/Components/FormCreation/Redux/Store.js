import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import ValueReducer from "./Value/ValueReducer";
import BasicReducer from "./BasicInfo/BasicReducer";
import AcademicReducer from "./Academic/AcademicReducer";
// import { LoginReducer } from "./Value/ValueReducer";
// import createSagaMiddleware from "redux-saga";
// import rootSaga from "./rootSaga";
// import darkstateReducer from "./Darkstate/darkstateReducer";
// import redux from 'redux';

// const combineReducer=redux.combineReducers;

const rootReducer = combineReducers({
  value: ValueReducer,
  Basicinfo: BasicReducer,
  Academicinfo: AcademicReducer,
});
// const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  compose()
  // applyMiddleware(sagaMiddleware),
  // window.__REDUX_DEVTOOLS_EXTENSION__()
);
// sagaMiddleware.run(rootSaga);

export default store;
