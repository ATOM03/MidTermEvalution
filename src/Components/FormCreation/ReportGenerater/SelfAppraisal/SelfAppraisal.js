import React from "react";
import { Button } from "@material-ui/core/";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import "./SelfAppraisal.css";
function SelfAppraisal(props) {
  //   const data = [props.data.basicInfo];
  const data = props.data;
  const basic = data.basicInfo;
  const teachinginfo = data.teachinginfo;
  const activityTable = teachinginfo.ActivityDetails;
  const teachingTable = teachinginfo.TeachingDetails;
  const downloadData = () => {
    const doc = new jsPDF();
    doc.text(
      "\t\t\t General Information and Academic Background \n \n",
      10,
      10
    );
    doc.autoTable({ html: "#my-table" });

    doc.addPage();
    doc.text("\t\t\t University and Teaching Activity \n \n", 10, 10);
    doc.autoTable({ html: "#my-table2" });

    doc.addPage();
    doc.text(
      "\t\t\t Teaching(Regular/Special classes in University) \n \n",
      10,
      10
    );
    doc.autoTable({ html: "#my-table3" });
    doc.save("selfAppraisalReport.pdf");
  };
  return (
    <div style={{ width: "100%", padding: "2%" }}>
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
          <tr>
            <th>Name(in Block Letters)</th>
            <td>{basic.Name}</td>
          </tr>
          <tr>
            <th>Employee code:</th>
            <td>{basic.Empcode}</td>
          </tr>
          <tr>
            <th>Father’s Name:</th>
            <td>{basic.Fathername}</td>
          </tr>
          <tr>
            <th>Mother’s Name:</th>
            <td>{basic.Mothername}</td>
          </tr>
          <tr>
            <th>Name of the School/ Department/Centre:</th>
            <td>{basic.NameofSchoolDepartment}</td>
          </tr>
          <tr>
            <th>Date of joining in the University:</th>
            <td>{basic.dateofjoining}</td>
          </tr>
          <tr>
            <th>Date of last promotion:</th>
            <td>{basic.dateoflastprom}</td>
          </tr>
          <tr>
            <th>Current Designation & Level ( in Pay Matrix):</th>
            <td>{basic.currentDesignation}</td>
          </tr>
          <tr>
            <th>Date and Place of Birth:</th>
            <td>{basic.DateofBirth}</td>
          </tr>
          <tr>
            <th>Nationality:</th>
            <td>{basic.Nationality}</td>
          </tr>
          <tr>
            <th>State of Domicile:</th>
            <td>{basic.stateofdomocile}</td>
          </tr>
          <tr>
            <th>Marital Status:</th>
            <td>{basic.maritalStatus}</td>
          </tr>
          <tr>
            <th>Address for Correspondence (with Pin Code):</th>
            <td>{basic.corresAddress}</td>
          </tr>
          <tr>
            <th>Permanent Address (with Pin Code):</th>
            <td>{basic.permaAddress}</td>
          </tr>
          <tr>
            <th>Telephone No.</th>
            <td>{basic.telephone}</td>
          </tr>
          <tr>
            <th>Mobile No.</th>
            <td>{basic.mobno}</td>
          </tr>
          <tr>
            <th>E-mail Address:</th>
            <td>{basic.email}</td>
          </tr>
        </table>
      </div>
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
    </div>
  );
}

export default SelfAppraisal;
