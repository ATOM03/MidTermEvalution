import { OPEN_SEMESTER } from "./Type";
const intialState = {
  open: false,
};

const semesterReducer = (state = intialState, action) => {
  switch (action.type) {
    case OPEN_SEMESTER:
      // console.log(action);
      return {
        open: action.payload.open,
      };
    default:
      return state;
  }
};

export default semesterReducer;
