import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import ValueReducer from "./Value/ValueReducer";
import BasicReducer from "./BasicInfo/BasicReducer";
import AcademicReducer from "./Academic/AcademicReducer";
import ActivityReducer from "./Activity/ActivityReducer";
import ResearchReducer from "./Research/ResearchReducer";

const rootReducer = combineReducers({
  value: ValueReducer,
  Basicinfo: BasicReducer,
  Academicinfo: AcademicReducer,
  Activityinfo: ActivityReducer,
  Researchinfo: ResearchReducer,
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
