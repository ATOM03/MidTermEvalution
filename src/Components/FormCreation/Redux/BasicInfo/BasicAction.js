import { BASIC_TYPE } from "./BasicType";

export const storeBasicInfo = (
  name,
  empcode,
  fname,
  mname,
  schoolDepartment,
  dateofjoining,
  dateoflastprom,
  currentDesi,
  dob,
  nationality,
  state,
  maritalStatus,
  lastpromotion,
  corresAddress,
  permaAddress,
  telephone,
  mobno,
  email
) => {
  return {
    type: BASIC_TYPE,
    payload: {
      name,
      empcode,
      fathername: fname,
      mothername: mname,
      NameofSchoolDepartment: schoolDepartment,
      dateofjoining,
      dateoflastprom,
      currentDesignation: currentDesi,
      dateofbirth: dob,
      nationality,
      stateofdomocile: state,
      maritalStatus,
      lastpromotion,
      corresAddress,
      permaAddress,
      telephone,
      Mobileno: mobno,
      Email: email,
    },
  };
};
