import React from "react";
import { Fragment } from "react";
import "../../assets/css/loading.css";
import Spinner from "react-bootstrap/Spinner";

function LoadingComponent() {
  return (
    <Fragment>
      <div className="container-loading">
        <div className="container-content">
          <Spinner animation="border" />
        </div>
      </div>
    </Fragment>
  );
}

export default LoadingComponent;
