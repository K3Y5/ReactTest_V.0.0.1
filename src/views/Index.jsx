import React from "react";
import {
  AppBreadcrumb,
  AppCard,
  AppWrapper,
} from "../components/partial/UiElement";

const Index = () => {
  return (
    <>
      <AppBreadcrumb title="Test Component" />
      <AppWrapper>
        <AppCard />
      </AppWrapper>
    </>
  );
};

export default Index;
