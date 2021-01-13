import React, { useState } from "react";
import { Card, InputBase, Button } from "@material-ui/core/";
import { changeValue } from "../Redux/Value/ValueAction";
import { useDispatch, useSelector } from "react-redux";
import { storeActivityInfo } from "../Redux/Activity/ActivityAction";
// import "./Academic.css";
function Activity(props) {
  const Activityinfo = useSelector((state) => state.Activityinfo);
  const [arraylist, setArrayList] = useState(Activityinfo.TeachingDetails);
  const [arraylist1, setArrayList1] = useState(Activityinfo.ActivityDetails);
  const dispatch = useDispatch();

  return (
    <div>
      <Card id="color-wheat">
        <div>
          <h2>Teaching(Regular/Special classes in University)</h2>
        </div>
        {arraylist.map((key, index) => (
          <div>
            <div
              style={{ width: "100%", display: "flex", flexDirection: "row" }}
            >
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
                    value={arraylist[index].yearorSem}
                    onChange={(e) => {
                      // setDegree(e.target.value);
                      let newarraylist = [...arraylist];
                      newarraylist[index].yearorSem = e.target.value;
                      setArrayList(newarraylist);
                    }}
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
                    value={arraylist[index].course}
                    onChange={(e) => {
                      // setDegree(e.target.value);
                      let newarraylist = [...arraylist];
                      newarraylist[index].course = e.target.value;
                      setArrayList(newarraylist);
                    }}
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
                    value={arraylist[index].numberofStudent}
                    onChange={(e) => {
                      let newarraylist = [...arraylist];
                      newarraylist[index].numberofStudent = e.target.value;
                      setArrayList(newarraylist);
                    }}
                    placeholder="Registered"
                    required
                  />
                </div>

                <div className="flex margin-academic">
                  <p>
                    Level(UG/PG <br />
                    /M.phil/Ph.D){" "}
                  </p>
                  <InputBase
                    style={{
                      marginTop: "10px",
                      display: "flex",
                      backgroundColor: "white",
                      paddingLeft: "10px",
                      height: "35px",
                      borderRadius: "5px",
                      marginLeft: "20px",
                      //   width: "90px",
                    }}
                    value={arraylist[index].level}
                    onChange={(e) => {
                      let newarraylist = [...arraylist];
                      newarraylist[index].level = e.target.value;
                      setArrayList(newarraylist);
                    }}
                    placeholder="Level"
                    required
                  />
                </div>
              </div>
            </div>

            <div
              style={{ width: "100%", display: "flex", flexDirection: "row" }}
            >
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
                    value={arraylist[index].modeofteaching}
                    onChange={(e) => {
                      let newarraylist = [...arraylist];
                      newarraylist[index].modeofteaching = e.target.value;
                      setArrayList(newarraylist);
                    }}
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
                    value={arraylist[index].totalclassassigned}
                    onChange={(e) => {
                      let newarraylist = [...arraylist];
                      newarraylist[index].totalclassassigned = e.target.value;
                      setArrayList(newarraylist);
                    }}
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
                    value={arraylist[index].numberofclasstaught}
                    onChange={(e) => {
                      let newarraylist = [...arraylist];
                      newarraylist[index].numberofclasstaught = e.target.value;
                      setArrayList(newarraylist);
                    }}
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
                    value={arraylist[index].grading}
                    onChange={(e) => {
                      let newarraylist = [...arraylist];
                      newarraylist[index].grading = e.target.value;
                      setArrayList(newarraylist);
                    }}
                    placeholder="Grading"
                    required
                  />
                </div>
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
                yearorSem: "",
                course: "",
                numberofStudent: "",
                level: "",
                modeofteaching: "",
                totalclassassigned: "",
                numberofclasstaught: "",
                grading: "",
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

        <div>
          <h2>Activity(Regular/Special classes in University)</h2>
        </div>
        {arraylist1.map((key, index) => (
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
                  value={arraylist1[index].activityyear}
                  onChange={(e) => {
                    let newarraylist = [...arraylist1];
                    newarraylist[index].activityyear = e.target.value;
                    setArrayList1(newarraylist);
                  }}
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
                  value={arraylist1[index].detailofactivity}
                  onChange={(e) => {
                    let newarraylist = [...arraylist1];
                    newarraylist[index].detailofactivity = e.target.value;
                    setArrayList1(newarraylist);
                  }}
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
                  value={arraylist1[index].category}
                  onChange={(e) => {
                    let newarraylist = [...arraylist1];
                    newarraylist[index].category = e.target.value;
                    setArrayList1(newarraylist);
                  }}
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
                  value={arraylist1[index].noofactivity}
                  onChange={(e) => {
                    let newarraylist = [...arraylist1];
                    newarraylist[index].noofactivity = e.target.value;
                    setArrayList1(newarraylist);
                  }}
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
                  value={arraylist1[index].activitygrading}
                  onChange={(e) => {
                    let newarraylist = [...arraylist1];
                    newarraylist[index].activitygrading = e.target.value;
                    setArrayList1(newarraylist);
                  }}
                  placeholder="Grading"
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
              let newarraylist = [...arraylist1];
              newarraylist.push({
                activityyear: "",
                detailofactivity: "",
                category: "",
                noofactivity: "",
                activitygrading: "",
              });
              setArrayList1(newarraylist);
            }}
          >
            Add New
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              let newarraylist = [...arraylist1];
              newarraylist.pop();
              setArrayList1(newarraylist);
            }}
          >
            Remove Last
          </Button>
        </div>
      </Card>
      <div className="flex-end">
        <Button
          variant="contained"
          color="primary"
          style={{ marginRight: "30px" }}
          onClick={() => {
            dispatch(changeValue(3));
            dispatch(storeActivityInfo(arraylist, arraylist1));
          }}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default Activity;
