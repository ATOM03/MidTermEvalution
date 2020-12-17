import React from "react";
import { Card, InputBase, Button } from "@material-ui/core/";
// import "./Academic.css";
function Activity(props) {
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
                  paddingLeft: "10px",
                  height: "35px",
                  borderRadius: "5px",
                  width: "90px",
                  marginLeft: "10px",
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
                  paddingLeft: "10px",
                  height: "35px",
                  borderRadius: "5px",
                  //   width: "90px",
                  marginLeft: "10px",
                }}
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
                  paddingLeft: "10px",
                  height: "35px",
                  borderRadius: "5px",
                  //   width: "90px",
                  marginLeft: "10px",
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
                  paddingLeft: "10px",
                  height: "35px",
                  borderRadius: "5px",
                  //   width: "90px",
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
                  paddingLeft: "10px",
                  height: "35px",
                  borderRadius: "5px",
                  width: "90px",
                  marginLeft: "10px",
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
                  paddingLeft: "10px",
                  height: "35px",
                  borderRadius: "5px",
                  //   width: "90px",
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
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default Activity;
