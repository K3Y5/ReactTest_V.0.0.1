import React from "react";
import { Outlet } from "react-router-dom";
import { AppFooter } from "../partial/UiElement";
import AppNavbar from "../partial/AppNavbar";

export const ContentLayout = () => {
  /* Taking reference of body element */
  let bodyElement = document.getElementsByTagName("body")[0];
  /* Changing the class of body Before mounting */
  bodyElement.className =
    "hold-transition layout-top-nav control-sidebar-slide-open layout-navbar-fixed layout-footer-fixed text-sm";
  /* Changing the class of root wrapper */
  let rootContainer = document.getElementById("root");
  rootContainer.className = "wrapper";

  return (
    <>
      {/* Preloaders */}
      {/* <AppPreloader /> */}

      {/* Section Navbar */}
      <AppNavbar>
        <AppNavbar.Top />
      </AppNavbar>

      {/* Section Content */}
      <div className={`content-wrapper`}>
        <Outlet />
      </div>

      {/* Section Footer */}
      <AppFooter />
    </>
  );
};

export default ContentLayout;
