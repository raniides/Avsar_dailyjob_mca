import React from "react";
import { Navbar, Container ,Nav,Button,NavDropdown} from "react-bootstrap";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import classes from "./Register.module.css";
// import { BsSearch } from "react-icons/bs";

function Header() {
  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: '#FAC9FF' }} variant="light">
        <Container >
          <Navbar.Brand className=" text-primary font-italic " href="/login">
            {/* <i className="bi bi-search"></i> */}
            <span className="d-flex">
              <img src="logo.png" style={{ width: '50px', height: '50px', marginRight: '6px' }}/>
              <h1 >Avsar </h1>
            </span>
          </Navbar.Brand>
          <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          />
         <Navbar.Collapse
         id="responsive-navbar-nav"
          >
            {/*<Nav style={{ marginLeft: "70px",width:"140px" }}>     
                <NavLink
                className={(navData) =>
                  navData.isActive ? classes.active : ""
                }
                to="/register"
                style={{ color: 'blue' ,fontSize: '25px'}}
              >
                Job Courses
              </NavLink>
            </Nav>*/}

<Nav style={{ marginLeft: "70px",width:"140px" }}>     
                <NavLink
                className={(navData) =>
                  navData.isActive ? classes.active : ""
                }
                to="/aboutus"
                style={{ color: 'blue' ,fontSize: '25px'}}
              >
                About Us
              </NavLink>
            </Nav>

            <Nav style={{ marginLeft: "90px" ,width:"100px" }}>
            <NavLink
                className={(navData) =>
                  navData.isActive ? classes.active : ""
                }
                to="/media"
                style={{ color: 'blue' ,fontSize: '25px'}}
              >
                Media
              </NavLink>
            </Nav>

            <Nav style={{ marginLeft: "80px" ,width:"100px" }}>
            <NavLink
                className={(navData) =>
                  navData.isActive ? classes.active : ""
                }
                to="/home"
                style={{ color: 'blue' ,fontSize: '25px'}}
              >
                  Home
                  </NavLink>
            </Nav>

            <Nav style={{ marginLeft: "80px" ,width:"100px" }}>
            <NavLink
                className={(navData) =>
                  navData.isActive ? classes.active : ""
                }
                to="/login"
                style={{ color: 'blue' ,fontSize: '25px'}}
              >
                    Login
                    </NavLink>
              </Nav>

              <Nav style={{ marginLeft: "80px" ,width:"100px" }}>
            <NavLink
                className={(navData) =>
                  navData.isActive ? classes.active : ""
                }
                to="/register"
                style={{ color: 'blue' ,fontSize: '25px'}}
              >
                    Register
                    </NavLink>
              </Nav>

         <Nav>           
            <NavDropdown
              id="nav-dropdown-dark-example"
              menuVariant="light"
              align="end"
              className={classes.user}
              style={{width:"200px",fontSize:"50px",height:"80px"}}
            >
              <NavDropdown.Item href="./aboutus">
               About Us
              </NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item href="./contactus">
                Contact Us
              </NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item href="">
                Getting Started
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          </Navbar.Collapse> 
        </Container>
      </Navbar>
      {/* <h3 className="m-5 font-italic"> Find the Job that fits for you</h3> */}
    </div>
  );
}

export default Header;
