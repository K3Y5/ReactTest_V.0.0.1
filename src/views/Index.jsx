import React from "react";
import {
  AppPageTitle,
  AppCard,
  AppWrapper,
} from "../components/partial/UiElement";
import { Col } from "react-bootstrap";

const Index = () => {
  return (
    <>
      {/* <AppPageTitle title="Test Component" breadcrumb={false} /> */}
      <AppWrapper className="pt-4">
        <AppCard
          setCardBody={{
            content: (
              <>
                <div className="row">
                  <Col lg={12}>Test Body</Col>
                </div>
              </>
            ),
          }}
        />
      </AppWrapper>
    </>
  );
};

export default Index;
