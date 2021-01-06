import { VALUE_TYPE } from "./ValueType.js";

export const changeValue = (number) => {
  return {
    type: VALUE_TYPE,
    payload: number,
  };
};
