import { Card, Col } from "react-bootstrap";
import classes from "./Modalf.module.css";

function Jobitem({ item, jobApply }) {
  const jobApplyHandler = () => {
    jobApply(item);
    console.log(item.job);
  };
  return (
    <div class="grid grid-col-4 gap-4">
      <Card
        // style={{ height: "375px", width: "15rem", marginTop: "45px" }}
        className={classes.cardstyle}
      >
        <Card.Body>
          <Card.Title><h1 style={{color:"Purple"}} >{item.title}</h1></Card.Title>
          <Card.Title>
            <div className={classes.style}>{item.description}</div>
          </Card.Title>
          <Card.Title>
            <div className={classes.style}>{item.city}</div>
          </Card.Title>
          <Card.Title>
            <div className={classes.style}>{item.salary}</div>
          </Card.Title>
          <Card.Title>
            <div className={classes.style}>{item.companyname}</div>
          </Card.Title>
          <Card.Title>
            <div className={classes.style}>{item.category}</div>
          </Card.Title>
          <button
            type="button"
            style={{ marginTop: "30px", paddingBottom: "10px" }}
            onClick={jobApplyHandler}
            className="btn btn-primary"
          >
            Apply Now
          </button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Jobitem;
