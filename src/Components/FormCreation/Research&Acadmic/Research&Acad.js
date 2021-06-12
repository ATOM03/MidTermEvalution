import React, { useState } from "react";
import { Card, InputBase, Button } from "@material-ui/core/";
import axios from "axios";
import { changeValue } from "../Redux/Value/ValueAction";
import { useDispatch, useSelector } from "react-redux";
import { storeResearchInfo } from "../Redux/Research/ResearchAction";
import store from "../Redux/Store";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
// import "./Academic.css";
function ResearchandAcad(props) {
  const Researchinfo = useSelector((state) => state.Researchinfo);
  const dispatch = useDispatch();
  const data = store.getState();
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");
  const [arraylist, setArrayList] = useState(Researchinfo.ResearchDetails);
  // console.log(data);
  const postData = async () => {
    console.log(data);
    axios
      .post(`http://localhost:8000/form/post`, data)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setError(res.data.payload.message);
        setOpen(true);
      })
      .catch((e) => {
        console.log(e);
        setError("Error Connection to the Server");
        setOpen(true);
      });
  };

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <div>
      <Card id="color-wheat">
        <div>
          <h2>Academic/Research Performance</h2>
        </div>
        <div>
          <h3>Research Papers in Peer-Reviewed or UGC-notified Journals </h3>
        </div>
        {arraylist.map((key, index) => (
          <div>
            <div
              style={{ width: "100%", display: "flex", flexDirection: "row" }}
            >
              <div className="flex">
                <div className="flex margin-academic">
                  <p>
                    Title of paper with Vol no
                    <br />
                    ,page no, month and year:{" "}
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
                    value={arraylist[index].titleofpaper}
                    onChange={(e) => {
                      let newarraylist = [...arraylist];
                      newarraylist[index].titleofpaper = e.target.value;
                      setArrayList(newarraylist);
                    }}
                    placeholder="Title"
                    required
                  />
                </div>
                <div className="flex margin-academic">
                  <p>
                    Name/Title of <br />
                    journal
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
                    value={arraylist[index].nameofjournal}
                    onChange={(e) => {
                      let newarraylist = [...arraylist];
                      newarraylist[index].nameofjournal = e.target.value;
                      setArrayList(newarraylist);
                    }}
                    placeholder="Name/Title"
                    required
                  />
                </div>
                <div className="flex margin-academic">
                  <p>ISSN/ISBN No. </p>
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
                    value={arraylist[index].ISSN}
                    onChange={(e) => {
                      let newarraylist = [...arraylist];
                      newarraylist[index].ISSN = e.target.value;
                      setArrayList(newarraylist);
                    }}
                    placeholder="ISSN/ISBN"
                    required
                  />
                </div>

                <div className="flex margin-academic">
                  <p>Latest Impact Factor,if Any </p>
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
                    value={arraylist[index].impactFactor}
                    onChange={(e) => {
                      let newarraylist = [...arraylist];
                      newarraylist[index].impactFactor = e.target.value;
                      setArrayList(newarraylist);
                    }}
                    placeholder="Impact factor"
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
                  <p>
                    Indexing: Scopus/ Web of
                    <br /> Science/ Any other
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
                      marginLeft: "10px",
                    }}
                    value={arraylist[index].indexing}
                    onChange={(e) => {
                      let newarraylist = [...arraylist];
                      newarraylist[index].indexing = e.target.value;
                      setArrayList(newarraylist);
                    }}
                    placeholder="Indexing"
                    required
                  />
                </div>
                <div className="flex margin-academic">
                  <p>No of Citations, excluding self citations)</p>
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
                    value={arraylist[index].noofcitations}
                    onChange={(e) => {
                      let newarraylist = [...arraylist];
                      newarraylist[index].noofcitations = e.target.value;
                      setArrayList(newarraylist);
                    }}
                    placeholder="Citations"
                    required
                  />
                </div>

                <div className="flex margin-academic">
                  <p>Latest h-Index and impact factor, if any</p>
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
                    value={arraylist[index].latestHindex}
                    onChange={(e) => {
                      let newarraylist = [...arraylist];
                      newarraylist[index].latestHindex = e.target.value;
                      setArrayList(newarraylist);
                    }}
                    placeholder="H-index"
                    required
                  />
                </div>
                <div className="flex margin-academic">
                  <p>No. of authors</p>
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
                    type="Number"
                    value={arraylist[index].noofauthors}
                    onChange={(e) => {
                      let newarraylist = [...arraylist];
                      newarraylist[index].noofauthors = e.target.value;
                      setArrayList(newarraylist);
                    }}
                    placeholder="No. of Authors"
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
                  <p>Whether main/ corresponding author</p>
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
                    value={arraylist[index].mainauthors}
                    onChange={(e) => {
                      let newarraylist = [...arraylist];
                      newarraylist[index].mainauthors = e.target.value;
                      setArrayList(newarraylist);
                    }}
                    placeholder="Whether main/ corresponding author"
                    required
                  />
                </div>
                <div className="flex margin-academic">
                  <p>National/ International</p>
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
                    value={arraylist[index].nation_internation}
                    onChange={(e) => {
                      let newarraylist = [...arraylist];
                      newarraylist[index].nation_internation = e.target.value;
                      setArrayList(newarraylist);
                    }}
                    placeholder="National/ International"
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
      </Card>
      <div className="flex-end">
        <Button
          variant="contained"
          color="primary"
          style={{ marginRight: "30px" }}
          onClick={() => {
            dispatch(storeResearchInfo(arraylist));
            postData();
          }}
        >
          Submit
        </Button>
      </div>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={error}
        action={
          <React.Fragment>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
}

export default ResearchandAcad;
