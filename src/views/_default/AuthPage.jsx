import React from "react";
import { AppButton } from "../../components/partial/UiElement";
import { Col, FormControl, InputGroup, Row } from "react-bootstrap";

export const Signin = () => {
  return (
    <>
      <InputGroup className="mb-3">
        <FormControl
          type="username"
          autoComplete="off"
          placeholder="Username"
          aria-describedby="username"
          autoFocus
        />
        <div className="input-group-append">
          <InputGroup.Text id="username" className="inputGroup-sizing-sm">
            <i className="icon-teal fa-regular fa-circle-user" />
          </InputGroup.Text>
        </div>
      </InputGroup>
      <InputGroup className="mb-3">
        <FormControl
          type="password"
          autoComplete="off"
          placeholder="Password"
          aria-describedby="password"
          autoFocus
        />
        <div className="input-group-append">
          <InputGroup.Text id="password" className="inputGroup-sizing-sm">
            <i className="icon-teal fa-regular fa-eye-slash fa-sm" />
          </InputGroup.Text>
        </div>
      </InputGroup>
      <Row>
        <Col lg={6}></Col>
        <Col lg={{ span: 6, offset: 6 }}>
          <div className="float-right">
            <AppButton
              title={
                <>
                  <i className="fa-solid fa-lock" />
                  &nbsp;&nbsp;Login
                </>
              }
            />
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <p className="mb-1">
            <a href="/forgotpassword">I forgot my password</a>
          </p>
          <p className="mb-1">
            <a href="/register">Registration trial</a>
          </p>
        </Col>
      </Row>
    </>
  );
};
export const Signup = () => {
  return <div>Signup</div>;
};
export const ForgotPassword = () => {
  return <div>ForgotPassword</div>;
};
