import React, { useState } from "react";
import { Button, Checkbox } from "@material-ui/core/";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import "./SelfAppraisal.css";
function SelfAppraisal(props) {
  //   const data = [props.data.basicInfo];
  const data = props.data;
  const basic = data.Basicinfo;
  const teachinginfo = data.Activityinfo;
  const activityTable = teachinginfo.ActivityDetails;
  const teachingTable = teachinginfo.TeachingDetails;

  const [generalInfo, setGeneralInfo] = useState(false);
  const [name, setName] = useState(false);
  const [empcode, setEmpcode] = useState(false);
  const [fathername, setFathername] = useState(false);
  const [mothename, setMothername] = useState(false);
  const [schoolname, setSchoolname] = useState(false);
  const [doj, setDoj] = useState(false);
  const [dolp, setDolp] = useState(false);
  const [designation, setDesignation] = useState(false);
  const [dob, setDob] = useState(false);
  const [nationality, setNationality] = useState(false);
  const [sod, setSod] = useState(false);
  const [martialStatus, setMartialStatus] = useState(false);
  const [addressCorr, setAddressCorr] = useState(false);
  const [permantAddress, setPermantAdrress] = useState(false);
  const [telephone, setTelephone] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [email, setEmail] = useState(false);

  const [activity, setActivity] = useState(false);
  const [teaching, setTeaching] = useState(false);
  const downloadData = () => {
    const doc = new jsPDF();
    if (generalInfo) {
      doc.text(
        "\t\t\t General Information and Academic Background \n \n",
        10,
        10
      );
      doc.autoTable({ html: "#my-table" });

      doc.addPage();
    }
    if (activity) {
      doc.text("\t\t\t University and Teaching Activity \n \n", 10, 10);
      doc.autoTable({ html: "#my-table2" });

      doc.addPage();
    }
    if (teaching) {
      doc.text(
        "\t\t\t Teaching(Regular/Special classes in University) \n \n",
        10,
        10
      );
      doc.autoTable({ html: "#my-table3" });
    }
    doc.save("selfAppraisalReport.pdf");
  };
  return (
    <div style={{ width: "100%", padding: "2%" }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex" }}>
          <h3>General Information and Academic Background</h3>
          <Checkbox
            checked={generalInfo}
            onChange={() => setGeneralInfo(!generalInfo)}
            name="checkedB"
            color="primary"
          />
        </div>
        {generalInfo ? (
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <p>Name</p>
            <Checkbox
              checked={name}
              onChange={() => setName(!name)}
              name="checkedB"
              color="primary"
            />
            <p>Employee Code</p>
            <Checkbox
              checked={empcode}
              onChange={() => setEmpcode(!empcode)}
              name="checkedB"
              color="primary"
            />
            <p>Father's Name</p>
            <Checkbox
              checked={fathername}
              onChange={() => setFathername(!fathername)}
              name="checkedB"
              color="primary"
            />
            <p>Mother's Name</p>
            <Checkbox
              checked={mothename}
              onChange={() => setMothername(!mothename)}
              name="checkedB"
              color="primary"
            />
            <p>Name of the School/Department Center</p>
            <Checkbox
              checked={schoolname}
              onChange={() => setSchoolname(!schoolname)}
              name="checkedB"
              color="primary"
            />
            <p>Date of joining in the University</p>
            <Checkbox
              checked={doj}
              onChange={() => setDoj(!doj)}
              name="checkedB"
              color="primary"
            />
            <p>Date of last promotion</p>
            <Checkbox
              checked={dolp}
              onChange={() => setDolp(!dolp)}
              name="checkedB"
              color="primary"
            />
            <p>Current Designation and Level</p>
            <Checkbox
              checked={designation}
              onChange={() => setDesignation(!designation)}
              name="checkedB"
              color="primary"
            />
            <p>Date and Place of Birth</p>
            <Checkbox
              checked={dob}
              onChange={() => setDob(!dob)}
              name="checkedB"
              color="primary"
            />
            <p>Nationality</p>
            <Checkbox
              checked={nationality}
              onChange={() => setNationality(!nationality)}
              name="checkedB"
              color="primary"
            />
            <p>State of Domicile</p>
            <Checkbox
              checked={sod}
              onChange={() => setSod(!sod)}
              name="checkedB"
              color="primary"
            />
            <p>Martial Status</p>
            <Checkbox
              checked={martialStatus}
              onChange={() => setMartialStatus(!martialStatus)}
              name="checkedB"
              color="primary"
            />
            <p>Address for Correspondence</p>
            <Checkbox
              checked={addressCorr}
              onChange={() => setAddressCorr(!addressCorr)}
              name="checkedB"
              color="primary"
            />
            <p>Permanent Address</p>
            <Checkbox
              checked={permantAddress}
              onChange={() => setPermantAdrress(!permantAddress)}
              name="checkedB"
              color="primary"
            />
            <p>Telephone No. </p>
            <Checkbox
              checked={telephone}
              onChange={() => setTelephone(!telephone)}
              name="checkedB"
              color="primary"
            />
            <p>Mobile No.</p>
            <Checkbox
              checked={mobile}
              onChange={() => setMobile(!mobile)}
              name="checkedB"
              color="primary"
            />
            <p>E-mail Address</p>
            <Checkbox
              checked={email}
              onChange={() => setEmail(!email)}
              name="checkedB"
              color="primary"
            />
          </div>
        ) : (
          ""
        )}
        <div style={{ display: "flex" }}>
          <h3>Activity(Regular/Special classes in University)</h3>
          <Checkbox
            checked={activity}
            onChange={() => setActivity(!activity)}
            name="checkedB"
            color="primary"
          />
        </div>
        <div style={{ display: "flex" }}>
          <h3> Teaching(Regular/Special classes in University)</h3>
          <Checkbox
            checked={teaching}
            onChange={() => setTeaching(!teaching)}
            name="checkedB"
            color="primary"
          />
        </div>
      </div>
      {generalInfo ? (
        <div
          style={{
            width: "100%",
          }}
        >
          <h2 style={{ marginLeft: "10px" }}>
            General Information and Academic Background
          </h2>
          <table
            style={{ width: "70%", borderCollapse: "collapse" }}
            id="my-table"
          >
            {name ? (
              <tr>
                <th>Name(in Block Letters)</th>
                <td>{basic.Name}</td>
              </tr>
            ) : (
              ""
            )}
            {empcode ? (
              <tr>
                <th>Employee code:</th>
                <td>{basic.Empcode}</td>
              </tr>
            ) : (
              ""
            )}
            {fathername ? (
              <tr>
                <th>Father’s Name:</th>
                <td>{basic.Fathername}</td>
              </tr>
            ) : (
              ""
            )}
            {mothename ? (
              <tr>
                <th>Mother’s Name:</th>
                <td>{basic.Mothername}</td>
              </tr>
            ) : (
              ""
            )}
            {schoolname ? (
              <tr>
                <th>Name of the School/ Department/Centre:</th>
                <td>{basic.NameofSchoolDepartment}</td>
              </tr>
            ) : (
              ""
            )}
            {doj ? (
              <tr>
                <th>Date of joining in the University:</th>
                <td>{basic.dateofjoining}</td>
              </tr>
            ) : (
              ""
            )}
            {dolp ? (
              <tr>
                <th>Date of last promotion:</th>
                <td>{basic.dateoflastprom}</td>
              </tr>
            ) : (
              ""
            )}
            {designation ? (
              <tr>
                <th>Current Designation & Level ( in Pay Matrix):</th>
                <td>{basic.currentDesignation}</td>
              </tr>
            ) : (
              ""
            )}
            {dob ? (
              <tr>
                <th>Date and Place of Birth:</th>
                <td>{basic.DateofBirth}</td>
              </tr>
            ) : (
              ""
            )}
            {nationality ? (
              <tr>
                <th>Nationality:</th>
                <td>{basic.Nationality}</td>
              </tr>
            ) : (
              ""
            )}
            {sod ? (
              <tr>
                <th>State of Domicile:</th>
                <td>{basic.stateofdomocile}</td>
              </tr>
            ) : (
              ""
            )}
            {martialStatus ? (
              <tr>
                <th>Marital Status:</th>
                <td>{basic.maritalStatus}</td>
              </tr>
            ) : (
              ""
            )}
            {addressCorr ? (
              <tr>
                <th>Address for Correspondence (with Pin Code):</th>
                <td>{basic.corresAddress}</td>
              </tr>
            ) : (
              ""
            )}
            {permantAddress ? (
              <tr>
                <th>Permanent Address (with Pin Code):</th>
                <td>{basic.permaAddress}</td>
              </tr>
            ) : (
              ""
            )}
            {telephone ? (
              <tr>
                <th>Telephone No.</th>
                <td>{basic.telephone}</td>
              </tr>
            ) : (
              ""
            )}
            {mobile ? (
              <tr>
                <th>Mobile No.</th>
                <td>{basic.mobno}</td>
              </tr>
            ) : (
              ""
            )}
            {email ? (
              <tr>
                <th>E-mail Address:</th>
                <td>{basic.email}</td>
              </tr>
            ) : (
              ""
            )}
          </table>
        </div>
      ) : (
        ""
      )}
      {activity ? (
        <div style={{ marginTop: "40px" }}>
          <div
            style={{
              width: "100%",
            }}
          >
            <h2 style={{ marginLeft: "10px" }}>
              Activity(Regular/Special classes in University)
            </h2>
            <table
              style={{ width: "70%", borderCollapse: "collapse" }}
              id="my-table2"
            >
              <tr>
                <th>Activity Grading</th>
                <th>Activity year</th>
                <th>Category</th>
                <th>Detatil of Activity</th>
                <th>Number of Activity</th>
              </tr>
              {activityTable.map((key, index) => (
                <tr>
                  <td>{key.activitygrading}</td>
                  <td>{key.activityyear}</td>
                  <td>{key.category}</td>
                  <td>{key.detailofactivity}</td>
                  <td>{key.noofactivity}</td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      ) : (
        ""
      )}
      {teaching ? (
        <div style={{ marginTop: "40px" }}>
          <div
            style={{
              width: "100%",
            }}
          >
            <h2 style={{ marginLeft: "10px" }}>
              Teaching(Regular/Special classes in University)
            </h2>
            <table
              style={{ width: "100%", borderCollapse: "collapse" }}
              id="my-table3"
            >
              <tr>
                <th>Year/Sem</th>
                <th>Course</th>
                <th>No.of Students registered in Course/class</th>
                <th>Level(UG/PG /M.phil/Ph.D)</th>
                <th>Mode of Teaching</th>
                <th>Total Classes Assigned</th>
                <th>
                  No.of Classes taught as per documented record x100% classes
                </th>
                <th>Grading(seld assesment)</th>
              </tr>
              {teachingTable.map((key, index) => (
                <tr>
                  <td>{key.yearorSem}</td>
                  <td>{key.course}</td>
                  <td>{key.numberofStudent}</td>
                  <td>{key.level}</td>
                  <td>{key.modeofteaching}</td>
                  <td>{key.totalclassassigned}</td>
                  <td>{key.numberofclasstaught}</td>
                  <td>{key.grading}</td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      ) : (
        ""
      )}
      {teaching || activity || generalInfo ? (
        <div className="flex-end">
          <Button
            variant="contained"
            color="primary"
            style={{ marginRight: "30px" }}
            onClick={downloadData}
          >
            Download Report
          </Button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default SelfAppraisal;
