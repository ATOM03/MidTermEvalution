import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import ValueReducer from "./Value/ValueReducer";
import BasicReducer from "./BasicInfo/BasicReducer";
import AcademicReducer from "./Academic/AcademicReducer";
import ActivityReducer from "./Activity/ActivityReducer";
import ResearchReducer from "./Research/ResearchReducer";
import semesterReducer from "./SemesterOpen/Reducer";

const rootReducer = combineReducers({
  value: ValueReducer,
  Basicinfo: BasicReducer,
  Academicinfo: AcademicReducer,
  Activityinfo: ActivityReducer,
  Researchinfo: ResearchReducer,
  SemesterOpen: semesterReducer,
});
// const sagaMiddleware = createSagaMiddleware();

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancer()
  // compose(),
  // // applyMiddleware(sagaMiddleware),
  // window.__REDUX_DEVTOOLS_EXTENSION__()
);
// sagaMiddleware.run(rootSaga);

export default store;
