import { Card, ListGroupItem, ListGroup, Button } from "react-bootstrap";
import classes from "./Modalf.module.css";

function Jobitem({ item, jobApply }) {
  const tag = item.title.split(" ")[0].toLowerCase();
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>
          <h1 style={{ color:"Purple"}}>{item.title} Role</h1>
        </Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">

        <ListGroupItem>
          <Card.Text className={classes.city}>
            {item.city}
          </Card.Text>
        </ListGroupItem>
        
        <ListGroupItem>
          <Card.Text className={classes.salary}>
            {item.salary} per day
          </Card.Text>
        </ListGroupItem>
        <ListGroupItem>
          <Card.Text className={classes.description}>
            {item.description}
          </Card.Text>
        </ListGroupItem>
        <ListGroupItem>
          <h6>{item.category}</h6>
        </ListGroupItem>
        <ListGroupItem>
          <div className={classes.deadlines}>
            <div>Start Date:</div>
            <div className={classes.dates}>
              <i className="bi bi-calendar2-check"></i>
              <span className="mx-2">{item.startDate}</span>
            </div>
          </div>
        </ListGroupItem>

        <ListGroupItem>
          <div className={classes.deadlines}>
            <div>End Date:</div>
            <div className={classes.dates}>
              <i className="bi bi-calendar-x"></i>
              <span className="mx-2">{item.startDate}</span>
            </div>
          </div>
        </ListGroupItem>
      </ListGroup>
      <Card.Body>
        {!item.status && (
          <Button
            variant="primary"
            onClick={() => {
              jobApply(item);
            }}
          >
            Apply Now
          </Button>
        )}
        {item.status && (
          <Button
            variant={item.status.includes("Applied") ? "secondary" : "success"}
            className={
              item.status === "Shortlisted" ? classes.shortlistedButton : ""
            }
            disabled={true}
          >
            {item.status === "Shortlisted" ? (
              <span>
                Hired <i className="bi bi-heart-fill"></i>
              </span>
            ) : (
              item.status
            )}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default Jobitem;
