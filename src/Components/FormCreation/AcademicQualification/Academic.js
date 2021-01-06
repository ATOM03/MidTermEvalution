import React, { useState } from "react";
import { Card, InputBase, Button } from "@material-ui/core/";
import "./Academic.css";
import { changeValue } from "../Redux/Value/ValueAction";
import { storeAcademicInfo } from "../Redux/Academic/AcademicAction";
import { useDispatch, useSelector } from "react-redux";
function Academic(props) {
  const Academic = useSelector((state) => state.Academicinfo);
  console.log(Academic);
  const [degree, setDegree] = useState("");
  const [subject, setSubject] = useState("");
  const [year, setYear] = useState("");
  const [university, setUniverstiy] = useState("");
  const [state, setState] = useState("");
  const [fieldofspecialization, setFieldofspecialization] = useState(
    Academic.FieldofSpecialization
  );
  const [pgyear, setPgyear] = useState(Academic.PGyear);
  const [ugyear, setUgyear] = useState(Academic.UGyear);
  const [researchyear, setResearchyear] = useState(Academic.Researchyear);
  const [industryyear, setIndustryyear] = useState(Academic.Industryyear);
  const dispatch = useDispatch();
  return (
    <div>
      <Card id="color-wheat">
        <div>
          <h2>Academic Qualification</h2>
        </div>
        <div>
          <h4>Details of Qualification</h4>
        </div>
        <div style={{ width: "100%", display: "flex", flexDirection: "row" }}>
          <div className="flex">
            <div className="flex margin-academic">
              <p>Degree: </p>
              <InputBase
                style={{
                  marginTop: "10px",
                  display: "flex",
                  backgroundColor: "white",
                  paddingLeft: "10px",
                  height: "35px",
                  borderRadius: "5px",
                  width: "90px",
                  marginLeft: "10px",
                }}
                value={degree}
                onChange={(e) => setDegree(e.target.value)}
                placeholder="Degree"
                required
              />
            </div>
            <div className="flex margin-academic">
              <p>
                Subject/Title of <br /> Dissertation/Thesis{" "}
              </p>
              <InputBase
                style={{
                  marginTop: "10px",
                  display: "flex",
                  backgroundColor: "white",
                  paddingLeft: "10px",
                  height: "35px",
                  borderRadius: "5px",
                  width: "90px",
                  marginLeft: "10px",
                }}
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Subject"
                required
              />
            </div>
            <div className="flex margin-academic">
              <p>Year of Award </p>
              <InputBase
                style={{
                  marginTop: "10px",
                  display: "flex",
                  backgroundColor: "white",
                  paddingLeft: "10px",
                  height: "35px",
                  borderRadius: "5px",
                  //   width: "90px",
                  marginLeft: "10px",
                }}
                value={year}
                onChange={(e) => setYear(e.target.value)}
                placeholder="Year of the Award"
                required
              />
            </div>

            <div className="flex margin-academic">
              <p>University: </p>
              <InputBase
                style={{
                  marginTop: "10px",
                  display: "flex",
                  backgroundColor: "white",
                  paddingLeft: "10px",
                  height: "35px",
                  borderRadius: "5px",
                  //   width: "90px",
                }}
                value={university}
                onChange={(e) => setUniverstiy(e.target.value)}
                placeholder="University"
                required
              />
            </div>
            <div className="flex margin-academic">
              <p>State: </p>
              <InputBase
                style={{
                  marginTop: "10px",
                  display: "flex",
                  backgroundColor: "white",
                  paddingLeft: "10px",
                  height: "35px",
                  borderRadius: "5px",
                  //   width: "90px",
                  marginLeft: "10px",
                }}
                value={state}
                onChange={(e) => setState(e.target.value)}
                placeholder="State"
                required
              />
            </div>
          </div>
        </div>
        <div className="flex-end">
          <Button variant="contained" color="secondary">
            Add New
          </Button>
        </div>
        <div style={{ width: "100%", display: "flex", flexDirection: "row" }}>
          <div className="fifty-perent">
            <div className="flex">
              <p>Field (s) of Specialization :</p>
              <InputBase
                style={{
                  marginTop: "10px",
                  display: "flex",
                  backgroundColor: "white",
                  paddingLeft: "10px",
                  height: "35px",
                  borderRadius: "5px",
                }}
                value={fieldofspecialization}
                onChange={(e) => setFieldofspecialization(e.target.value)}
                placeholder="Field (s) of Specialization"
                required
              />
            </div>
          </div>
          <div className="fifty-perent">
            <div className="flex-column">
              <p>Period of Teaching:</p>
              <div className="flex">
                <p>P.G Classes(in years)</p>
                <InputBase
                  style={{
                    marginTop: "10px",
                    display: "flex",
                    backgroundColor: "white",
                    paddingLeft: "10px",
                    height: "35px",
                    borderRadius: "5px",
                  }}
                  value={pgyear}
                  onChange={(e) => setPgyear(e.target.value)}
                  placeholder="P.G Classes"
                  required
                />
              </div>
              <div className="flex">
                <p>U.G Classes(in years)</p>
                <InputBase
                  style={{
                    marginTop: "10px",
                    display: "flex",
                    backgroundColor: "white",
                    paddingLeft: "10px",
                    height: "35px",
                    borderRadius: "5px",
                  }}
                  value={ugyear}
                  onChange={(e) => setUgyear(e.target.value)}
                  placeholder="U.G Classes"
                  required
                />
              </div>
              <div className="flex">
                <p>Research Experience :</p>
                <InputBase
                  style={{
                    marginTop: "10px",
                    display: "flex",
                    backgroundColor: "white",
                    paddingLeft: "10px",
                    height: "35px",
                    borderRadius: "5px",
                  }}
                  value={researchyear}
                  onChange={(e) => setResearchyear(e.target.value)}
                  placeholder="Research Experience"
                  required
                />
              </div>
              <div className="flex">
                <p>Industry Experience(if any)</p>
                <InputBase
                  style={{
                    marginTop: "10px",
                    display: "flex",
                    backgroundColor: "white",
                    paddingLeft: "10px",
                    height: "35px",
                    borderRadius: "5px",
                  }}
                  value={industryyear}
                  onChange={(e) => setIndustryyear(e.target.value)}
                  placeholder="Industry Experience"
                  required
                />
              </div>
            </div>
          </div>
        </div>
      </Card>
      <div className="flex-end">
        <Button
          variant="contained"
          color="primary"
          style={{ marginRight: "30px" }}
          onClick={() => {
            dispatch(changeValue(2));
            dispatch(
              storeAcademicInfo(
                [{ degree, subject, year, university, state }],
                fieldofspecialization,
                pgyear,
                ugyear,
                researchyear,
                industryyear
              )
            );
          }}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default Academic;
