import React, { useState } from "react";
import { Card, InputBase, Button } from "@material-ui/core/";
import { changeValue } from "../Redux/Value/ValueAction";
import { useDispatch } from "react-redux";
// import "./Academic.css";
function Activity(props) {
  const [yearorSem, setYearorSem] = useState("");
  const [course, setCourse] = useState("");
  const [numberofStudent, setNumberofStudent] = useState("");
  const [level, setLevel] = useState("");
  const [modeofteaching, setModeofteaching] = useState("");
  const [totalclassassigned, setTotalclassAssigned] = useState("");
  const [numberofclasstaught, setNumberofclasstaught] = useState("");
  const [grading, setGrading] = useState("");
  const [activityyear, setActivityyear] = useState("");
  const [detailofactivity, setDetailofactivity] = useState("");
  const [category, setCategory] = useState("");
  const [noofactivity, setNoofactivity] = useState("");
  const [activitygrading, setActivitygrading] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <Card id="color-wheat">
        <div>
          <h2>Teaching(Regular/Special classes in University)</h2>
        </div>
        <div style={{ width: "100%", display: "flex", flexDirection: "row" }}>
          <div className="flex">
            <div className="flex margin-academic">
              <p>Year/Sem: </p>
              <InputBase
                style={{
                  marginTop: "10px",
                  display: "flex",
                  backgroundColor: "white",
                  padding: "0 10px",
                  height: "35px",
                  borderRadius: "5px",
                  width: "90px",
                  marginLeft: "10px",
                }}
                type="Number"
                value={yearorSem}
                onChange={(e) => setYearorSem(e.target.value)}
                placeholder="Year/Sem"
                required
              />
            </div>
            <div className="flex margin-academic">
              <p>Course/Paper</p>
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
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                placeholder="Course"
                required
              />
            </div>
            <div className="flex margin-academic">
              <p>No.of Students registered in Course/class </p>
              <InputBase
                style={{
                  marginTop: "10px",
                  display: "flex",
                  backgroundColor: "white",
                  padding: " 010px",
                  height: "35px",
                  borderRadius: "5px",
                  //   width: "90px",
                  marginLeft: "10px",
                }}
                type="Number"
                value={numberofStudent}
                onChange={(e) => setNumberofStudent(e.target.value)}
                placeholder="Registered"
                required
              />
            </div>

            <div className="flex margin-academic">
              <p>Level(UG/PG/M.phil/Ph.D) </p>
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
                value={level}
                onChange={(e) => setLevel(e.target.value)}
                placeholder="Level"
                required
              />
            </div>
          </div>
        </div>
        <div style={{ width: "100%", display: "flex", flexDirection: "row" }}>
          <div className="flex">
            <div className="flex margin-academic">
              <p>Mode of Teaching </p>
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
                value={modeofteaching}
                onChange={(e) => setModeofteaching(e.target.value)}
                placeholder="Mode of Teaching"
                required
              />
            </div>
            <div className="flex margin-academic">
              <p>Total Classes Assigned </p>
              <InputBase
                style={{
                  marginTop: "10px",
                  display: "flex",
                  backgroundColor: "white",
                  padding: " 0 10px",
                  height: "35px",
                  borderRadius: "5px",
                  //   width: "90px",
                  marginLeft: "10px",
                }}
                type="Number"
                value={totalclassassigned}
                onChange={(e) => setTotalclassAssigned(e.target.value)}
                placeholder="Total Classes Attd"
                required
              />
            </div>

            <div className="flex margin-academic">
              <p>
                No.of Classes taught as per documented record x100% classes{" "}
              </p>
              <InputBase
                style={{
                  marginTop: "10px",
                  display: "flex",
                  backgroundColor: "white",
                  padding: " 0 10px",
                  height: "35px",
                  borderRadius: "5px",
                  //   width: "90px",
                }}
                type="Number"
                value={numberofclasstaught}
                onChange={(e) => setNumberofStudent(e.target.value)}
                placeholder="No.of class"
                required
              />
            </div>
            <div className="flex margin-academic">
              <p>Grading(seld assesment) </p>
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
                value={grading}
                onChange={(e) => setGrading(e.target.value)}
                placeholder="Grading"
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

        <div>
          <h2>Activity(Regular/Special classes in University)</h2>
        </div>
        <div style={{ width: "100%", display: "flex", flexDirection: "row" }}>
          <div className="flex">
            <div className="flex margin-academic">
              <p>Year/Sem: </p>
              <InputBase
                style={{
                  marginTop: "10px",
                  display: "flex",
                  backgroundColor: "white",
                  padding: " 0 10px",
                  height: "35px",
                  borderRadius: "5px",
                  width: "90px",
                  marginLeft: "10px",
                }}
                type="Number"
                value={activityyear}
                onChange={(e) => setActivityyear(e.target.value)}
                placeholder="Year/Sem"
                required
              />
            </div>
            <div className="flex margin-academic">
              <p>Details of Activities</p>
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
                value={detailofactivity}
                onChange={(e) => setDetailofactivity(e.target.value)}
                placeholder="Details "
                required
              />
            </div>
            <div className="flex margin-academic">
              <p>Category</p>
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
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Category"
                required
              />
            </div>

            <div className="flex margin-academic">
              <p>No.of Activity during Assessment Period </p>
              <InputBase
                style={{
                  marginTop: "10px",
                  display: "flex",
                  backgroundColor: "white",
                  padding: " 0 10px",
                  height: "35px",
                  borderRadius: "5px",
                  //   width: "90px",
                }}
                type="Number"
                value={noofactivity}
                onChange={(e) => setNoofactivity(e.target.value)}
                placeholder="Activity"
                required
              />
            </div>
            <div className="flex margin-academic">
              <p>Grading(self assesment) </p>
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
                value={activitygrading}
                onChange={(e) => setActivitygrading(e.target.value)}
                placeholder="Grading"
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
      </Card>
      <div className="flex-end">
        <Button
          variant="contained"
          color="primary"
          style={{ marginRight: "30px" }}
          onClick={() => dispatch(changeValue(3))}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default Activity;
