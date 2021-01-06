import React from "react";
import { Card, InputBase, Button } from "@material-ui/core/";
import { changeValue } from "../Redux/Value/ValueAction";
import { useDispatch } from "react-redux";
// import "./Academic.css";
function ResearchandAcad(props) {
  const dispatch = useDispatch();
  return (
    <div>
      <Card id="color-wheat">
        <div>
          <h2>Academic/Research Performance</h2>
        </div>
        <div>
          <h3>Research Papers in Peer-Reviewed or UGC-notified Journals </h3>
        </div>
        <div style={{ width: "100%", display: "flex", flexDirection: "row" }}>
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
                placeholder="Impact factor"
                required
              />
            </div>
          </div>
        </div>
        <div style={{ width: "100%", display: "flex", flexDirection: "row" }}>
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
                placeholder="H-index and impact factor"
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
                placeholder="No. of Authors"
                required
              />
            </div>
          </div>
        </div>
        <div style={{ width: "100%", display: "flex", flexDirection: "row" }}>
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
                placeholder="National/ International"
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
          // onClick={() => dispatch(changeValue(0))}
        >
          Submit
        </Button>
      </div>
    </div>
  );
}

export default ResearchandAcad;
