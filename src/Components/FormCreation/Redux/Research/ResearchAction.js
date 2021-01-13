import { RESEARCH_TYPE } from "./ResearchType";

export const storeResearchInfo = (ResearchDetails) => {
  return {
    type: RESEARCH_TYPE,
    payload: {
      ResearchDetails: ResearchDetails,
    },
  };
};
