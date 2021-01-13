import { ACTIVITY_TYPE } from "./ActivityType";

export const storeActivityInfo = (Teaching, Activity) => {
  return {
    type: ACTIVITY_TYPE,
    payload: {
      TeachingDetails: Teaching,
      ActivityDetails: Activity,
    },
  };
};
