import { RESEARCH_TYPE } from "./ResearchType";

const intialState = {
  ResearchDetails: [
    {
      titleofpaper: "",
      nameofjournal: "",
      ISSN: "",
      impactFactor: "",
      indexing: "",
      noofcitations: "",
      latestHindex: "",
      noofauthors: "",
      mainauthors: "",
      nation_internation: "",
    },
  ],
};

const ResearchReducer = (state = intialState, action) => {
  switch (action.type) {
    case RESEARCH_TYPE:
      return {
        ResearchDetails: action.payload.ResearchDetails,
      };
    default:
      return state;
  }
};

export default ResearchReducer;
