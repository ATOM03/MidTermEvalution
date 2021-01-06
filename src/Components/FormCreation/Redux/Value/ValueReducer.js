import { VALUE_TYPE } from "./ValueType";

const intialState = {
  value: 0,
};

const ValueReducer = (state = intialState, action) => {
  switch (action.type) {
    case VALUE_TYPE:
      return {
        ...state,
        value: action.payload,
      };
    default:
      return state;
  }
};

export default ValueReducer;
