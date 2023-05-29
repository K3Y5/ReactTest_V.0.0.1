import React, { useState } from "react";

import "../../assets/css/main_uiElement.css";
import { MDBFooter } from "mdb-react-ui-kit";
import {
  Breadcrumb,
  Button,
  Card,
  CloseButton,
  Modal,
  Row,
} from "react-bootstrap";
import MaterialReactTable from "material-react-table";
import { CircularProgress } from "@mui/material";
import { useLocation } from "react-router-dom";

function firstTextUpper(text) {
  const words = text.split(" ");
  let result = "";
  words
    .map((word) => {
      const upper = word[0].toUpperCase();
      const lower = word.substring(1);
      return (result = upper + lower);
    })
    .join(" ");
  return result;
}

export const AppPreloader = () => {
  return (
    <div className="preloader flex-column justify-content-center align-items-center">
      <img
        className="animation__shake"
        src={`${process.env.PUBLIC_URL}/assets/img/AdminLTELogo.png`}
        alt="AdminLTELogo"
        height="60"
        width="60"
      />
    </div>
  );
};

export const AppPageTitle = ({ title, subTitle, breadcrumb = false }) => {
  const location = useLocation();
  let pathLocation = location.pathname;
  const explodeLocation = pathLocation.split("/").filter((element) => element);

  return (
    <div className="content-header py-4 px-1">
      <div className="mb-1 ml-2">
        <div className="row">
          <div className="col-8 float-left">
            <div className="row">
              <h3 className="m-0">{title}</h3>
              <>
                {subTitle ? (
                  <>
                    <h3 className="m-0">
                      <span>&nbsp;|&nbsp;</span>
                    </h3>
                    <h6 className="mt-2 mb-2 ml-0">{subTitle}</h6>
                  </>
                ) : (
                  ""
                )}
              </>
            </div>
          </div>
          {breadcrumb ? (
            <div className="col-4 d-none d-sm-block">
              <Breadcrumb className="float-right" style={{ padding: "10px" }}>
                <Breadcrumb.Item href="/">
                  <span className="fa fa-home">&nbsp;</span>
                  Home
                </Breadcrumb.Item>
                {explodeLocation.map(function (value, index) {
                  return (
                    <Breadcrumb.Item active key={index}>
                      {/* {value.toUpperCase()} */}
                      {firstTextUpper(value)}
                    </Breadcrumb.Item>
                  );
                })}
              </Breadcrumb>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export const AppWrapper = ({ children, className }) => {
  return (
    <div className={`content${className ? ` ${className}` : ""}`}>
      {children}
    </div>
  );
};

export const AppFooter = () => {
  return (
    <>
      <MDBFooter bgColor="light" className="main-footer text-xs">
        <div className="float-left">
          <strong style={{}}>
            &copy; {new Date().getFullYear()} Copyright: ReactJS + AdminLTE
            V3.2.0
          </strong>
        </div>
        <div className="float-right">
          <b>Version: </b>
          {process.env.REACT_APP_VERSION}
        </div>
      </MDBFooter>
    </>
  );
};

export const AppModal = ({
  children,
  show,
  modalSize,
  modalTitle,
  modalFooter,
  backdrop,
  onClose = () => {},
  confirmButton = { title: "", size: "", variant: "", onClick: () => {} },
  cancelButton = { title: "", size: "", variant: "", onClick: () => {} },
}) => {
  const [backdropStatus, setBackdropStatus] = useState(
    backdrop ? backdrop : true
  );
  return (
    <Modal
      show={show}
      onHide={() => {
        onClose();
      }}
      backdrop={backdropStatus}
      aria-labelledby="appModal"
      dialogClassName={`modal-${
        modalSize ? (modalSize !== "" ? modalSize : "md") : "md"
      } modal-dialog-centered`}
      className="app-modal"
    >
      <Modal.Header className="app-modal-header">
        <Modal.Title className="app-modal-title" id="appModal">
          {modalTitle}
        </Modal.Title>
        <CloseButton
          aria-label="Hide"
          variant="white"
          className="btn btn-md"
          onClick={() => {
            onclose();
          }}
        >
          <span className="fa fa-times fa-lg" />
        </CloseButton>
      </Modal.Header>
      <Modal.Body className="app-modal-body"></Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
};

export const AppButton = ({
  className,
  type,
  colors,
  size,
  title = {},
  isLoading = false,
  onClick = () => {},
}) => {
  return (
    <>
      <Button
        disabled={isLoading}
        size={size ? size : "md"}
        className={`btn-${colors ? colors : "teal"} ${className}`}
        onClick={() => {
          onClick();
        }}
      >
        {!isLoading ? (
          title
        ) : (
          <>
            <CircularProgress size={10} />
            &nbsp;&nbsp;Waiting...
          </>
        )}
      </Button>
    </>
  );
};

export const AppCard = ({
  setCard = { className: "", colors: "grey" },
  enableCardHeader = true,
  setCardHeader = { className: "", title: false },
  enableCardBody = true,
  setCardBody = { className: "", content: false },
  enableCardFooter = false,
  setCardFooter = { className: "", content: false },
}) => {
  return (
    <Card className={`bg-${setCard.colors}`}>
      {enableCardHeader ? (
        enableCardHeader !== false ? (
          <Card.Header>
            {setCardHeader.title === false
              ? "Example Title"
              : setCardHeader.title}
          </Card.Header>
        ) : (
          <></>
        )
      ) : (
        <></>
      )}
      {enableCardBody ? (
        enableCardBody !== false ? (
          <Card.Body>{setCardBody.content}</Card.Body>
        ) : (
          <></>
        )
      ) : (
        <></>
      )}
      {enableCardFooter ? (
        enableCardFooter !== false ? (
          <Card.Footer className="text-muted">
            {setCardFooter.content}
          </Card.Footer>
        ) : (
          <></>
        )
      ) : (
        <></>
      )}
    </Card>
  );
};

export const AppTable = ({
  loading = false,
  column = [],
  data = [],
  columnVisibility = {},
  DetailPanel = {},
  ActionRow = {},
  topToolbar = {},
  enableRowActions = true,
}) => {
  return (
    <>
      <MaterialReactTable
        state={{
          isLoading: loading,
        }}
        displayColumnDefOptions={{
          "mrt-row-actions": {
            muiTableHeadCellProps: {
              align: "center",
            },
            size: 80,
          },
        }}
        columns={column}
        data={data}
        enableColumnOrdering
        initialState={{
          columnVisibility: columnVisibility,
          density: "compact",
        }}
        renderDetailPanel={DetailPanel ? DetailPanel : <></>}
        enableRowActions={enableRowActions}
        renderRowActions={ActionRow ? ActionRow : <></>}
        renderTopToolbarCustomActions={topToolbar ? topToolbar : <></>}
      />
    </>
  );
};
