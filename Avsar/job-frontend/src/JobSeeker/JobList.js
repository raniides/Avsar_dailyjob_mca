import React from "react";
import { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import axios from "axios";
import Jobitem from "./Job_item";
import ApplyModal from "./ApplyModal";
import classes from "./Modalf.module.css";
import Config from "../config/Config.json";

let jobsData = [];
const Jobs = () => {
  const [modal, setModal] = useState(false);
  const [action, setAction] = useState(false);
  const [jobSet, setjobSet] = useState("");
  const [jobs, setJobs] = useState([]);

  const closeModalHandler = () => {
    setModal(false);
  };

  const jobApply = (applyData) => {
    setModal(true);
    setjobSet(applyData);
  };

  const jobSearchHandler = (event) => {
    event.preventDefault();
    setJobs(
      jobsData.filter((job) =>
        job.title.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  };

  const jobCitySearchHandler = (event) => {
    event.preventDefault();
    setJobs(
      jobsData.filter((job) =>
        job.city.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  };

  const jobCategorySearchHandler = (event) => {
    event.preventDefault();
    setJobs(
      jobsData.filter((job) =>
        job.category.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  };

  useEffect(() => {
    axios
      .get(`${Config.SERVER_URL + "user/jobsAvailable"}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        jobsData = response.data.jobs;
        setJobs(response.data.jobs);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [action]);

  return (
    <div>
      <Container>
        <Row style={{ marginTop: "20px", marginLeft: "10px" }}>
          <Col sm={3} style={{ position: "fixed", left: "70px", top: "180px", height: "calc(100vh - 150px)" }}>
            {/* Left side containing search bars */}
            <h3><center>Search by</center></h3>
            <input
              className="form-control"
              type="search"
              onChange={jobSearchHandler}
              placeholder="Search By Job Name"
              style={{ marginTop: "40px" }}
            ></input>
            <input
              className="form-control"
              type="search"
              onChange={jobCitySearchHandler}
              placeholder="Search By City"
              style={{ marginTop: "40px" }}
            ></input>
            <input
              className="form-control"
              type="search"
              onChange={jobCategorySearchHandler}
              placeholder="Search By Category"
              style={{ marginTop: "40px" }}
            ></input>
          </Col>
          <Col sm={5} style={{ marginLeft: "400px", overflowY: "scroll",overflowX: "hidden", height: "650px" ,marginTop:"0px",width:"950px"}}>
            {/* Right side containing job cards */}
            <Container fluid>
              <div className={classes.grid}>
                {jobs.map((jobItem) => (
                  <Jobitem key={jobItem._id} item={jobItem} jobApply={jobApply} />
                ))}
              </div>
            </Container>
          </Col>
        </Row>
      </Container>
      {modal && (
        <ApplyModal
          job={jobSet}
          onOpen={modal}
          onClose={closeModalHandler}
          changes={setAction}
        />
      )}
    </div>
  );
};

export default Jobs;
