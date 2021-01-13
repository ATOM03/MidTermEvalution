import { ACTIVITY_TYPE } from "./ActivityType";

const intialState = {
  TeachingDetails: [
    {
      yearorSem: "",
      course: "",
      numberofStudent: "",
      level: "",
      modeofteaching: "",
      totalclassassigned: "",
      numberofclasstaught: "",
      grading: "",
    },
  ],
  ActivityDetails: [
    {
      activityyear: "",
      detailofactivity: "",
      category: "",
      noofactivity: "",
      activitygrading: "",
    },
  ],
};

const ActivityReducer = (state = intialState, action) => {
  switch (action.type) {
    case ACTIVITY_TYPE:
      return {
        TeachingDetails: action.payload.TeachingDetails,
        ActivityDetails: action.payload.ActivityDetails,
      };
    default:
      return state;
  }
};

export default ActivityReducer;
