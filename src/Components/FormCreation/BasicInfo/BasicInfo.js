import React from "react";
import { Card, InputBase, Button } from "@material-ui/core/";
import "./BasicInfo.css";
function BasicInfo(props) {
  return (
    <div>
      <Card id="color-wheat">
        <div>
          <h2>General Information and Academic Background</h2>
        </div>
        <div style={{ width: "100%", display: "flex", flexDirection: "row" }}>
          <div className="fifty-perent">
            <div className="flex">
              <p>Name(In Block Letter) :</p>
              <InputBase
                style={{
                  marginTop: "10px",
                  display: "flex",
                  backgroundColor: "white",
                  paddingLeft: "10px",
                  height: "35px",
                  borderRadius: "5px",
                }}
                placeholder="Name"
                required
              />
            </div>
          </div>
          <div className="fifty-perent">
            <div className="flex">
              <p>Employee Code :</p>
              <InputBase
                style={{
                  marginTop: "10px",
                  display: "flex",
                  backgroundColor: "white",
                  paddingLeft: "10px",
                  height: "35px",
                  borderRadius: "5px",
                }}
                placeholder="Employee Code"
                required
              />
            </div>
          </div>
        </div>
        <div style={{ width: "100%", display: "flex", flexDirection: "row" }}>
          <div className="fifty-perent">
            <div className="flex">
              <p>Father's Name :</p>
              <InputBase
                style={{
                  marginTop: "10px",
                  display: "flex",
                  backgroundColor: "white",
                  paddingLeft: "10px",
                  height: "35px",
                  borderRadius: "5px",
                }}
                placeholder="Father Name"
              />
            </div>
          </div>
          <div className="fifty-perent">
            <div className="flex">
              <p>Mother's Name :</p>
              <InputBase
                style={{
                  marginTop: "10px",
                  display: "flex",
                  backgroundColor: "white",
                  paddingLeft: "10px",
                  height: "35px",
                  borderRadius: "5px",
                }}
                placeholder="Mother's Name"
              />
            </div>
          </div>
        </div>
        <div style={{ width: "100%", display: "flex", flexDirection: "row" }}>
          <div className="fifty-perent">
            <div className="flex">
              <p>
                Name of the School
                <br />
                /Department/Center :
              </p>
              <InputBase
                style={{
                  marginTop: "10px",
                  display: "flex",
                  backgroundColor: "white",
                  paddingLeft: "10px",
                  height: "35px",
                  borderRadius: "5px",
                }}
                placeholder="Name of the School"
              />
            </div>
          </div>
          <div className="fifty-perent">
            <div className="flex">
              <p>
                Date of joining in the
                <br /> University :
              </p>
              <InputBase
                style={{
                  marginTop: "10px",
                  display: "flex",
                  backgroundColor: "white",
                  paddingLeft: "10px",
                  height: "35px",
                  borderRadius: "5px",
                }}
                placeholder="Date"
              />
            </div>
          </div>
        </div>
        <div style={{ width: "100%", display: "flex", flexDirection: "row" }}>
          <div className="fifty-perent">
            <div className="flex">
              <p>Date of last promotion :</p>
              <InputBase
                style={{
                  marginTop: "10px",
                  display: "flex",
                  backgroundColor: "white",
                  paddingLeft: "10px",
                  height: "35px",
                  borderRadius: "5px",
                }}
                placeholder="Date of last promotion"
              />
            </div>
          </div>
          <div className="fifty-perent">
            <div className="flex">
              <p>
                Current Designation & <br />
                Level ( in Pay Matrix) :
              </p>
              <InputBase
                style={{
                  marginTop: "10px",
                  display: "flex",
                  backgroundColor: "white",
                  paddingLeft: "10px",
                  height: "35px",
                  borderRadius: "5px",
                }}
                placeholder="Designation and Level"
              />
            </div>
          </div>
        </div>
        <div style={{ width: "100%", display: "flex", flexDirection: "row" }}>
          <div className="fifty-perent">
            <div className="flex">
              <p>Date and Place of Birth :</p>
              <InputBase
                style={{
                  marginTop: "10px",
                  display: "flex",
                  backgroundColor: "white",
                  paddingLeft: "10px",
                  height: "35px",
                  borderRadius: "5px",
                }}
                placeholder="DOB"
              />
            </div>
          </div>
          <div className="fifty-perent">
            <div className="flex">
              <p>Nationality :</p>
              <InputBase
                style={{
                  marginTop: "10px",
                  display: "flex",
                  backgroundColor: "white",
                  paddingLeft: "10px",
                  height: "35px",
                  borderRadius: "5px",
                }}
                placeholder="Nationality"
              />
            </div>
          </div>
        </div>
        <div style={{ width: "100%", display: "flex", flexDirection: "row" }}>
          <div className="fifty-perent">
            <div className="flex">
              <p>State of Domicile :</p>
              <InputBase
                style={{
                  marginTop: "10px",
                  display: "flex",
                  backgroundColor: "white",
                  paddingLeft: "10px",
                  height: "35px",
                  borderRadius: "5px",
                }}
                placeholder="State of Domicile"
              />
            </div>
          </div>
          <div className="fifty-perent">
            <div className="flex">
              <p>Marital Status: :</p>
              <InputBase
                style={{
                  marginTop: "10px",
                  display: "flex",
                  backgroundColor: "white",
                  paddingLeft: "10px",
                  height: "35px",
                  borderRadius: "5px",
                }}
                placeholder="Marital Status:"
              />
            </div>
          </div>
        </div>
        <div style={{ width: "100%", display: "flex", flexDirection: "row" }}>
          <div className="fifty-perent">
            <div className="flex">
              <p>Last Promotion :</p>
              <InputBase
                style={{
                  marginTop: "10px",
                  display: "flex",
                  backgroundColor: "white",
                  paddingLeft: "10px",
                  height: "35px",
                  borderRadius: "5px",
                }}
                placeholder="Last Promotion"
              />
            </div>
          </div>
          <div className="fifty-perent">
            <div className="flex">
              <p>Address for Correspondence (with Pin Code) :</p>
              <InputBase
                style={{
                  marginTop: "10px",
                  display: "flex",
                  backgroundColor: "white",
                  paddingLeft: "10px",
                  height: "35px",
                  borderRadius: "5px",
                }}
                placeholder="Address"
              />
            </div>
          </div>
        </div>
        <div style={{ width: "100%", display: "flex", flexDirection: "row" }}>
          <div className="fifty-perent">
            <div className="flex">
              <p>Permanent Address (with Pin Code) :</p>
              <InputBase
                style={{
                  marginTop: "10px",
                  display: "flex",
                  backgroundColor: "white",
                  paddingLeft: "10px",
                  height: "35px",
                  borderRadius: "5px",
                }}
                placeholder="Permanent Address (with Pin Code)"
              />
            </div>
          </div>
          <div className="fifty-perent">
            <div className="flex">
              <p>Telephone No :</p>
              <InputBase
                style={{
                  marginTop: "10px",
                  display: "flex",
                  backgroundColor: "white",
                  paddingLeft: "10px",
                  height: "35px",
                  borderRadius: "5px",
                }}
                placeholder="Telephone No"
              />
            </div>
          </div>
        </div>
        <div style={{ width: "100%", display: "flex", flexDirection: "row" }}>
          <div className="fifty-perent">
            <div className="flex">
              <p>Mobile No :</p>
              <InputBase
                style={{
                  marginTop: "10px",
                  display: "flex",
                  backgroundColor: "white",
                  paddingLeft: "10px",
                  height: "35px",
                  borderRadius: "5px",
                }}
                placeholder="Mobile No"
              />
            </div>
          </div>
          <div className="fifty-perent">
            <div className="flex">
              <p>E-mail Address :</p>
              <InputBase
                style={{
                  marginTop: "10px",
                  display: "flex",
                  backgroundColor: "white",
                  paddingLeft: "10px",
                  height: "35px",
                  borderRadius: "5px",
                }}
                placeholder="E-mail Address"
              />
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

export default BasicInfo;
