import React, { useState } from "react";
import { Card, InputBase, Button } from "@material-ui/core/";
import "./BasicInfo.css";
import { changeValue } from "../Redux/Value/ValueAction";
import { storeBasicInfo } from "../Redux/BasicInfo/BasicAction";
import { useDispatch, useSelector } from "react-redux";
import store from "../Redux/Store";
function BasicInfo(props) {
  const dispatch = useDispatch();
  const BasicInfo = useSelector((state) => state.Basicinfo);
  console.log(BasicInfo);
  const [name, setName] = useState(BasicInfo.Name);
  const [empcode, setEmpcode] = useState(BasicInfo.Empcode);
  const [fname, setFname] = useState(BasicInfo.Fathername);
  const [mname, setMname] = useState(BasicInfo.Mothername);
  const [schoolDepartment, setSchoolDepartment] = useState(
    BasicInfo.NameofSchoolDepartment
  );
  const [dateofjoining, setDateofjoining] = useState(BasicInfo.dateofjoining);
  const [dateoflastprom, setDateoflastprom] = useState(
    BasicInfo.dateoflastprom
  );
  const [currentDesi, setCurrentDesi] = useState(BasicInfo.currentDesignation);
  const [dob, setDob] = useState(BasicInfo.DateofBirth);
  const [nationality, setNationality] = useState(BasicInfo.Nationality);
  const [state, setState] = useState(BasicInfo.stateofdomocile);
  const [maritalStatus, setMaritalStatus] = useState(BasicInfo.maritalStatus);
  const [lastpromotion, setLastPromotion] = useState(BasicInfo.lastpromotion);
  const [corresAddress, setCorresAddress] = useState(BasicInfo.corresAddress);
  const [permaAddress, setPermaAddress] = useState(BasicInfo.permaAddress);
  const [telephone, setTelephone] = useState(BasicInfo.telephone);
  const [mobno, setMobno] = useState(BasicInfo.mobno);
  const [email, setEmail] = useState(BasicInfo.email);
  return (
    <div>
      <Card id="color-wheat">
        <form>
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
                  value={name}
                  type="text"
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
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
                    padding: "0 10px",
                    height: "35px",
                    borderRadius: "5px",
                  }}
                  value={empcode}
                  type="number"
                  onChange={(e) => setEmpcode(e.target.value)}
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
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
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
                  value={mname}
                  onChange={(e) => setMname(e.target.value)}
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
                  value={schoolDepartment}
                  onChange={(e) => setSchoolDepartment(e.target.value)}
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
                  value={dateofjoining}
                  type="date"
                  placeholder="Date"
                  onChange={(e) => setDateofjoining(e.target.value)}
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
                  type="date"
                  value={dateoflastprom}
                  onChange={(e) => setDateoflastprom(e.target.value)}
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
                  value={currentDesi}
                  onChange={(e) => setCurrentDesi(e.target.value)}
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
                  type="date"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
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
                  value={nationality}
                  onChange={(e) => setNationality(e.target.value)}
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
                  value={state}
                  onChange={(e) => setState(e.target.value)}
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
                  value={maritalStatus}
                  onChange={(e) => setMaritalStatus(e.target.value)}
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
                  value={lastpromotion}
                  onChange={(e) => setLastPromotion(e.target.value)}
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
                  value={corresAddress}
                  onChange={(e) => setCorresAddress(e.target.value)}
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
                  value={permaAddress}
                  onChange={(e) => setPermaAddress(e.target.value)}
                  placeholder="Permanent Address"
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
                  value={telephone}
                  onChange={(e) => setTelephone(e.target.value)}
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
                  value={mobno}
                  onChange={(e) => setMobno(e.target.value)}
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
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="E-mail Address"
                />
              </div>
            </div>
          </div>
        </form>
      </Card>
      <div className="flex-end">
        <Button
          variant="contained"
          color="primary"
          style={{ marginRight: "30px" }}
          onClick={() => {
            dispatch(changeValue(1));
            dispatch(
              storeBasicInfo(
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

export default BasicInfo;
