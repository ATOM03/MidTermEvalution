import { BASIC_TYPE } from "./BasicType";

const intialState = {
  Name: "",
  Empcode: "",
  Fathername: "",
  Mothername: "",
  NameofSchoolDepartment: "",
  dateofjoining: "",
  dateoflastprom: "",
  currentDesignation: "",
  DateofBirth: "",
  Nationality: "",
  stateofdomocile: "",
  maritalStatus: "",
  lastpromotion: "",
  corresAddress: "",
  permaAddress: "",
  telephone: "",
  mobno: "",
  email: "",
};

const BasicReducer = (state = intialState, action) => {
  switch (action.type) {
    case BASIC_TYPE:
      return {
        Name: action.payload.name,
        Empcode: action.payload.empcode,
        Fathername: action.payload.fathername,
        Mothername: action.payload.mothername,
        NameofSchoolDepartment: action.payload.NameofSchoolDepartment,
        dateofjoining: action.payload.dateofjoining,
        dateoflastprom: action.payload.dateoflastprom,
        currentDesignation: action.payload.currentDesignation,
        DateofBirth: action.payload.dateofbirth,
        Nationality: action.payload.nationality,
        stateofdomocile: action.payload.stateofdomocile,
        maritalStatus: action.payload.maritalStatus,
        lastpromotion: action.payload.lastpromotion,
        corresAddress: action.payload.corresAddress,
        permaAddress: action.payload.permaAddress,
        telephone: action.payload.telephone,
        mobno: action.payload.Mobileno,
        email: action.payload.Email,
      };
    default:
      return state;
  }
};

export default BasicReducer;
