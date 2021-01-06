import { ACADEMIC_TYPE } from "./Academictype";

const intialState = {
  QualificationDetails: [],
  FieldofSpecialization: "",
  PGyear: "",
  UGyear: "",
  Researchyear: "",
  Industryyear: "",
};

const AcademicReducer = (state = intialState, action) => {
  switch (action.type) {
    case ACADEMIC_TYPE:
      return {
        QualificationDetails: action.payload.QualificationDetails,
        FieldofSpecialization: action.payload.fieldofspecialization,
        PGyear: action.payload.PGYEAR,
        UGyear: action.payload.UGYEAR,
        Researchyear: action.payload.ResearchYear,
        Industryyear: action.payload.IndustryYear,
      };
    default:
      return state;
  }
};

export default AcademicReducer;
