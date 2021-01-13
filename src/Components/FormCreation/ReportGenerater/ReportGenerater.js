import React, { useState } from "react";
import { Card, InputBase, Button } from "@material-ui/core/";
import { changeValue } from "../Redux/Value/ValueAction";
import { useDispatch, useSelector } from "react-redux";
import { storeActivityInfo } from "../Redux/Activity/ActivityAction";
import "./ReportGenerater.css";
import SelfAppraisal from "./SelfAppraisal/SelfAppraisal";
function ReportGenerater(props) {
  const Activityinfo = useSelector((state) => state.Activityinfo);
  const [statusSelf, setStatusSelf] = useState(false);
  const [statusNaac, setStatusNaac] = useState(false);
  const [data, setData] = useState({});
  const getData = () => {
    fetch("http://localhost:8000/selfAprraisalReport")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        setData(data.data);
        setStatusSelf(true);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div>
      <Card id="color-wheat">
        <div style={{ marginLeft: "30px" }}>
          <h2>Generate Report</h2>
        </div>

        <div
          className="flex-end"
          style={{ justifyContent: "flex-start", marginLeft: "30px" }}
        >
          <Button
            variant="contained"
            color="primary"
            style={{
              marginRight: "10px",
            }}
            onClick={getData}
          >
            Self-Appraisal
          </Button>
          <Button variant="contained" color="primary" onClick={() => {}}>
            NAAC
          </Button>
        </div>
        <div className="flex-end" style={{ justifyContent: "flex-start" }}>
          {statusSelf ? <SelfAppraisal data={data} /> : ""}
        </div>
      </Card>
    </div>
  );
}

export default ReportGenerater;
