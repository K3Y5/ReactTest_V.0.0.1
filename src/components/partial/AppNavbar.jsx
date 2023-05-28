import React from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const AppNavbar = (props) => {
  return (
    <>
      <Nav
        as="nav"
        className="main-header navbar navbar-expand-md navbar-light navbar-white text-sm border-bottom-0"
      >
        {props.children}
      </Nav>
    </>
  );
};

const TopNavbar = ({ data }) => {
  return (
    <>
      <Container fluid>
        {/* Brand Image */}
        <Navbar.Brand className="d-none d-md-block d-lg-block d-xl-block d-sm-none d-md-none">
          <img
            src={`${process.env.PUBLIC_URL}/assets/img/AdminLTELogo.png`}
            alt="Avatar"
            className="brand-image img-circle elevation-3 d-md-block d-lg-block d-xl-block"
            style={{ opacity: ".8" }}
          />
        </Navbar.Brand>

        {/* Navbar menu toggler and Brand Image */}
        <Navbar.Toggle
          as={Navbar.Brand}
          className="order-1 p-1 mt-1 text-sm"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{
            border: "none",
          }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/dist/img/AdminLTELogo.png`}
            alt="Avatar"
            className="brand-image img-circle elevation-3 d-md-block d-lg-block d-xl-block"
            style={{ opacity: ".8" }}
          />
        </Navbar.Toggle>

        {/* Brand Name */}
        <span className="navbar-brand d-none d-md-block d-lg-block d-xl-block d-sm-none d-md-none">
          AdminLTE 3
        </span>

        <div className="collapse navbar-collapse order-3" id="navbarCollapse">
          <ul className="navbar-nav">
            <Nav.Item as="li">
              <NavLink to="/" className={`nav-link`}>
                Home
              </NavLink>
            </Nav.Item>
            <Nav.Item as="li">
              <NavLink to="/form" className={`nav-link`}>
                Form
              </NavLink>
            </Nav.Item>
          </ul>

          {/* SEARCH FORM */}
        </div>

        {/* Right navbar links */}
        <Nav
          as="ul"
          className="order-1 order-md-3 navbar-nav navbar-no-expand ml-auto"
        >
          {/* DD Mailbox */}
          <NavDropdown
            as={Nav.Item}
            className="e-caret-hide"
            title={
              <>
                <span className="badge badge-danger navbar-badge">3</span>
                <i className="fa-solid fa-envelope fa-lg" />
              </>
            }
          >
            <NavDropdown.Item href="#action/3.1">
              <div className="media">
                <img
                  src={`${process.env.PUBLIC_URL}/dist/img/user1-128x128.jpg`}
                  alt="User Avatar"
                  className="img-size-50 mr-3 img-circle"
                />
                <div className="media-body">
                  <h3 className="dropdown-item-title">
                    Brad Diesel
                    <span className="float-right text-sm text-danger">
                      <i className="fas fa-star" />
                    </span>
                  </h3>
                  <p className="text-sm">Call me whenever you can...</p>
                  <p className="text-sm text-muted">
                    <i className="far fa-clock mr-1" /> 4 Hours Ago
                  </p>
                </div>
              </div>
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item className="dropdown-footer">
              See All Notification
            </NavDropdown.Item>
          </NavDropdown>

          {/* DD Notification */}
          <NavDropdown
            as={Nav.Item}
            className="e-caret-hide"
            title={
              <>
                <span className="badge badge-danger navbar-badge">3</span>
                <i className="fa-solid fa-bell fa-lg" />
              </>
            }
          >
            <NavDropdown.Item href="#action/3.1">
              <div className="media">
                <img
                  src={`${process.env.PUBLIC_URL}/dist/img/user1-128x128.jpg`}
                  alt="User Avatar"
                  className="img-size-50 mr-3 img-circle"
                />
                <div className="media-body">
                  <h3 className="dropdown-item-title">
                    Brad Diesel
                    <span className="float-right text-sm text-danger">
                      <i className="fas fa-star" />
                    </span>
                  </h3>
                  <p className="text-sm">Call me whenever you can...</p>
                  <p className="text-sm text-muted">
                    <i className="far fa-clock mr-1" /> 4 Hours Ago
                  </p>
                </div>
              </div>
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item className="dropdown-footer">
              See All Notification
            </NavDropdown.Item>
          </NavDropdown>

          {/* User Profiles */}
          <NavDropdown
            as={Nav.Item}
            className="e-caret-hide"
            title={
              <>
                <img
                  src={`${process.env.PUBLIC_URL}/dist/img/avatar4.png`}
                  alt="AdminLTE"
                  className="brand-image img-circle border-danger rounded-circle elevation-3 d-md-none d-lg-none d-xl-none"
                  style={{ opacity: ".8", border: "3px solid" }}
                />
                <span className="d-none d-sm-block d-md-block">
                  <i className="fa fa-user fa-lg" /> &nbsp; Hallo,&nbsp;
                  {/* {CurrentUser.name} */}
                </span>
              </>
            }
            id="collasible-nav-dropdown"
          >
            <NavDropdown.Item href="/login">Login</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">My Profile</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Account Settings
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">
              Globals Settings
            </NavDropdown.Item>
            <NavDropdown.Divider />
            {/* <NavDropdown.Item onClick={(ev) => logout(ev)}>
              Logout
            </NavDropdown.Item> */}
          </NavDropdown>
        </Nav>
      </Container>
    </>
  );
};

AppNavbar.Top = TopNavbar;

export default AppNavbar;
