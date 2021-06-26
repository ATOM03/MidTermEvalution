import { OPEN_SEMESTER } from "./Type";

export const openSemester = (openorClose) => {
  return {
    type: OPEN_SEMESTER,
    payload: {
      open: openorClose,
    },
  };
};
