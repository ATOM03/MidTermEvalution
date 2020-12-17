import React from "react";
import { Card, InputBase, Button } from "@material-ui/core/";
import "./Academic.css";
function Academic(props) {
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
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default Academic;
