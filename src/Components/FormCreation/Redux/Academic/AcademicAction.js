import { ACADEMIC_TYPE } from "./Academictype";

export const storeAcademicInfo = (
  qualificationdetails,
  fieldofspecialization,
  pgyear,
  ugyear,
  research,
  industryyear
) => {
  return {
    type: ACADEMIC_TYPE,
    payload: {
      QualificationDetails: qualificationdetails,
      fieldofspecialization,
      PGYEAR: pgyear,
      UGYEAR: ugyear,
      ResearchYear: research,
      IndustryYear: industryyear,
    },
  };
};
