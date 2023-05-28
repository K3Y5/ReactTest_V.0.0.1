import React from "react";

import { Box } from "@mui/material";
import { Card } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import reactLogo from "../../logo.svg";

const ImageLogo = ({ src }) => {
  return (
    <>
      <img src={src} alt="" style={{ width: "22%" }} />
    </>
  );
};

const AuthLayout = () => {
  /* Taking reference of body element */
  let bodyElement = document.getElementsByTagName("body")[0];
  /* Changing the class of body Before mounting */
  bodyElement.className = "login-page";
  bodyElement.style = {
    minHeight: "261px",
  };
  /* Changing the class of root wrapper */
  let rootContainer = document.getElementById("root");
  rootContainer.className = "login-box";
  return (
    <>
      <link
        rel="stylesheet"
        href={
          process.env.PUBLIC_URL +
          "/plugins/icheck-bootstrap/icheck-bootstrap.min.css"
        }
      />
      <Card className="card-outline card-teal">
        <Card.Header className="text-center">
          <Box component={"span"} className="h1">
            <ImageLogo src={reactLogo} /> + <b>Admin</b>LTE
          </Box>
        </Card.Header>
        <Card.Body>
          <Outlet />
        </Card.Body>
        <Card.Footer className="text-muted">
          <div className="float-right text-small">
            <b>AppVersion: </b>
            {process.env.REACT_APP_VERSION}
          </div>
        </Card.Footer>
      </Card>
    </>
  );
};

export default AuthLayout;
