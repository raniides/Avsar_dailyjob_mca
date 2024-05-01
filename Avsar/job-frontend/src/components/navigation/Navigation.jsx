import React from "react";

import { Link, useNavigate, NavLink } from "react-router-dom";
import classes from "./Navigation.module.css";
import { Navbar, Container, Nav, Dropdown } from "react-bootstrap";
import { useDispatch } from "react-redux";
import jwtDecode from "jwt-decode";

const Navigation = () => {
  // const selectauthToken = (rootstate) => rootstate.authToken;
  // const authToken = useSelector(selectauthToken);
  // console.log(authToken);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const authToken = localStorage.getItem("token");
  const redAuthToken = jwtDecode(authToken);

  const logoutHandler = () => {
    dispatch({ type: "CLEARAUTHTOKEN" });
    navigate("/", { replace: true });
  };

  return (
    <Navbar
      fixed="top"
      variant="light"
      expand="md"
      className={classes.nav}
    >
      <Container fluid >

        <NavLink
          // activeClassName={classes.active}
          className={classes.brand}
          to="/dashboard"
          style={{ color: 'blue' }}
        >
          <span className={classes.logo}>
          {/*<i className="bi bi-search"></i>*/}
            <img src="logo.png" style={{ width: '50px', height: '50px', marginRight: '6px' }}/>
          </span>
          Avsar
        </NavLink>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          {redAuthToken.role === "Admin" && (
            <Nav className={`me-auto ${classes.pageLinks}`}>
              <NavLink
                className={(navData) =>
                  navData.isActive ? classes.active : ""
                }
                to="/manage-users"
                style={{ color: 'blue' }}
              >
                Users
              </NavLink>
              <NavLink
                className={(navData) =>
                  navData.isActive ? classes.active : ""
                }
                to="/manage-jobs"
                style={{ color: 'blue' }}
              >
                Jobs
              </NavLink>
              <NavLink
                className={(navData) =>
                  navData.isActive ? classes.active : ""
                }
                to="/reports"
                style={{ color: 'blue' }}
              >
                Reports
              </NavLink>
            </Nav>
          )}
          {redAuthToken.role === "Job Provider" && (
            <Nav className={`me-auto ${classes.pageLinks}`}>
              <NavLink
                className={(navData) =>
                  navData.isActive ? classes.active : ""
                }
                to="/manage-applicants"
                style={{ color: 'blue' }}
              >
                Applicant
              </NavLink>
              <NavLink
                className={(navData) =>
                  navData.isActive ? classes.active : ""
                }
                to="/manage-jobs"
                style={{ color: 'blue' }}
              >
                Jobs
              </NavLink>
              <NavLink
                className={(navData) =>
                  navData.isActive ? classes.active : ""
                }
                to="/provider-report"
                style={{ color: 'blue' }}
              >
                Reports
              </NavLink>
            </Nav>
          )}
          {redAuthToken.role === "User" && (
            <Nav className={`me-auto ${classes.pageLinks}`}>
              <NavLink
                className={(navData) =>
                  navData.isActive ? classes.active : ""
                }
                to="/dashboard"
                style={{ color: 'blue' }}
              >
                Job Oppurtinities
              </NavLink>
              <NavLink
                className={(navData) =>
                  navData.isActive ? classes.active : ""
                }
                to="/media"
                style={{ color: 'blue' }}
              >
                Media
              </NavLink>
              <NavLink
                className={(navData) =>
                  navData.isActive ? classes.active : ""
                }
                to="/appliedJobs"
                style={{ color: 'blue' }}
              >
                Applied Jobs Status
              </NavLink>
            </Nav>
          )}
          <Nav>
            <Dropdown align={"end"} className={classes.dropDown}>
              <Dropdown.Toggle className={classes.user}>
                <span className={classes.username}>
                  <span className={classes.userLogo}>
                    <i className="bi bi-person-circle"></i>
                  </span>
                  {redAuthToken.userName}
                </span>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Link to="/change-password" className={classes.changePassword}>
                  Change Password
                </Link>
                <Dropdown.Divider />
                <Link to="/contactus" className={classes.changePassword}>
                  Contact Us
                </Link>
                <Dropdown.Divider />
                <Dropdown.Item
                  as={"button"}
                  onClick={logoutHandler}
                  className={classes.changePassword}
                >
                  Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
