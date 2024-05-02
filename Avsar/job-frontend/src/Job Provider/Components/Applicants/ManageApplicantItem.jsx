import axios from "axios";
import { Button, Card } from "react-bootstrap"; 
import classes from "./ApplicantItem.module.css"; 
import Config from "../../../config/Config.json";

const ApplicantItem = ({ setAction, ...props }) => {
  const applicantItemId = props.applicantItem._id;
  const token = props.token;

  const shortlistCandidateHandler = () => {
    axios
      .patch(
        `${Config.SERVER_URL}provider/applicants/shortlist/${applicantItemId}`,
        {},
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((res) => {
        setAction((prev) => !prev);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const rejectCandidateHandler = () => {
    axios
      .patch(
        `${Config.SERVER_URL}provider/applicants/reject/${applicantItemId}`,
        {},
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((res) => {
        setAction((prev) => !prev);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const viewResumeHandler = () => {
    axios
      .get(
        `${Config.SERVER_URL}provider/applicants/view-resume/${applicantItemId}`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
          responseType: "blob",
        }
      )
      .then((res) => {
        const file = new Blob([res.data], { type: "application/pdf" });
        const fileUrl = URL.createObjectURL(file);
        window.open(fileUrl);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Card className={classes.card}>
      <Card.Body>
      <center><Card.Title><h1 style={{marginTop:"10px"}}>{props.applicantItem.userId.name}</h1></Card.Title></center>
        <center style={{marginTop:"20px"}}><Button className={classes.button} onClick={viewResumeHandler}>
          View Certificate
        </Button></center>
      </Card.Body>
      <Card.Footer>
      <center style={{marginTop:"20px"}}>
        <Button
          className={`${classes.shortlistCandidate} ${classes.button}`}
          onClick={shortlistCandidateHandler}
          disabled={props.applicantItem.status === "Shortlisted"}
        >
          <span>
            <i className="bi bi-person-check-fill"></i>
          </span>
          <span>Hire</span>
        </Button> 
        <Button
          className={`${classes.rejectCandidate} ${classes.button}`}
          onClick={rejectCandidateHandler}
        >
          <span>
            <i className="bi bi-person-x-fill"></i>
          </span>
          <span>Reject</span>
        </Button>
        </center>
      </Card.Footer>
    </Card>
  );
};

export default ApplicantItem;
