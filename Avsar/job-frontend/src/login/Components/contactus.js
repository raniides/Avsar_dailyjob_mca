import React from 'react';
import { Link } from "react-router-dom";
import { Button} from "react-bootstrap";

class ContactUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
      error: null,
    };
  }

  componentDidMount() {
    this.getLocation();
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          this.setState({ error: error.message });
        }
      );
    } else {
      this.setState({ error: "Geolocation is not supported by this browser." });
    }
  }

  render() {
    return (
      <div className="container-fluid bg-light" style={{ minHeight: "100vh" }}>
        <nav  style={{ backgroundColor:"#FAC9FF",width:"1425px",height:"80px"}}>
          <div className="container" >
          <Link className="" to="/home">
                      <Button
                        variant="success"
                        style={{ marginLeft: "1130px",marginTop:"5px" ,backgroundColor:"magenta",height:"40px"}}
                        size="lg"
                      >
                        {" "}
                        Home{" "}
                      </Button>
                    </Link>
            <center><a className="navbar-brand" href="#" style={{fontSize:"25px"}}>Contact Us</a></center>
            
          </div>
        </nav>
        <div   style={{backgroundColor:"#C8B5FF",width:"1425px",height:"627px"}} >
            <center >
          <h1 style={{fontSize:"60px",color:"dark"}}>AVSAR</h1>
          <h5 style={{fontSize:"30px",color:"purple"}}>Connecting With Oppurtunities</h5>
          </center>
          <div>
          <center >
            <h2 style={{marginTop:"30px",fontSize:"40px"}}><u>Roll Numbers:</u></h2>
            <ul style={{fontSize:"25px",color:"purple"}}>
              <li>2317</li>
              <li>2341</li>
              <li>2327</li>
              <li>2349</li>
              <li>2346</li>
            </ul>
            </center>
          </div>
          <div>
          <center >
            <h2  style={{marginTop:"10px",fontSize:"40px"}}><u>Addresses:</u></h2>
            <ul>
              <li style={{fontSize:"30px",color:"purple"}}>Goa Business School, Goa University, Panaji</li>
            </ul>
            </center>
          </div>
          <div>
          <center >
            <h2 style={{marginTop:"5px",fontSize:"40px"}}><u>Current Location:</u></h2>
            {this.state.latitude && this.state.longitude ? (
              <p style={{fontSize:"30px",color:"purple"}}>Latitude: {this.state.latitude}, Longitude: {this.state.longitude}</p>
            ) : (
              <p>{this.state.error || "Fetching location..."}</p>
            )}

          </center>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactUs;