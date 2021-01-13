import React, { useState } from "react";
import { Card, InputBase, Button } from "@material-ui/core/";
import "./Academic.css";
import { changeValue } from "../Redux/Value/ValueAction";
import { storeAcademicInfo } from "../Redux/Academic/AcademicAction";
import { useDispatch, useSelector } from "react-redux";
function Academic(props) {
  const Academic = useSelector((state) => state.Academicinfo);
  console.log(Academic);
  const [fieldofspecialization, setFieldofspecialization] = useState(
    Academic.FieldofSpecialization
  );
  const [arraylist, setArrayList] = useState(Academic.QualificationDetails);
  const [pgyear, setPgyear] = useState(Academic.PGyear);
  const [ugyear, setUgyear] = useState(Academic.UGyear);
  const [researchyear, setResearchyear] = useState(Academic.Researchyear);
  const [industryyear, setIndustryyear] = useState(Academic.Industryyear);
  const dispatch = useDispatch();
  console.log(arraylist);
  return (
    <div>
      <Card id="color-wheat">
        <div>
          <h2>Academic Qualification</h2>
        </div>
        <div>
          <h4>Details of Qualification</h4>
        </div>
        {arraylist.map((key, index) => (
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
                  value={arraylist[index].degree}
                  onChange={(e) => {
                    // setDegree(e.target.value);
                    let newarraylist = [...arraylist];
                    newarraylist[index].degree = e.target.value;
                    setArrayList(newarraylist);
                  }}
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
                  value={arraylist[index].subject}
                  onChange={(e) => {
                    let newarraylist = [...arraylist];
                    newarraylist[index].subject = e.target.value;
                    setArrayList(newarraylist);
                  }}
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
                  value={arraylist[index].year}
                  onChange={(e) => {
                    let newarraylist = [...arraylist];
                    newarraylist[index].year = e.target.value;
                    setArrayList(newarraylist);
                  }}
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
                  value={arraylist[index].university}
                  onChange={(e) => {
                    let newarraylist = [...arraylist];
                    newarraylist[index].university = e.target.value;
                    setArrayList(newarraylist);
                  }}
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
                  value={arraylist[index].state}
                  onChange={(e) => {
                    let newarraylist = [...arraylist];
                    newarraylist[index].state = e.target.value;
                    setArrayList(newarraylist);
                  }}
                  placeholder="State"
                  required
                />
              </div>
            </div>
          </div>
        ))}
        <div className="flex-end">
          <Button
            variant="contained"
            color="secondary"
            style={{
              marginRight: "10px",
            }}
            onClick={() => {
              let newarraylist = [...arraylist];
              newarraylist.push({
                degree: "",
                subject: "",
                year: "",
                university: "",
                state: "",
              });
              setArrayList(newarraylist);
            }}
          >
            Add New
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              let newarraylist = [...arraylist];
              newarraylist.pop();
              setArrayList(newarraylist);
            }}
          >
            Remove Last
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
                arraylist,
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
