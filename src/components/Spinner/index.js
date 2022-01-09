import React from "react";
import { usePromiseTracker } from "react-promise-tracker";
import Loader from "react-loader-spinner";

function Spinner() {
  const { promiseInProgress } = usePromiseTracker();

  return (
    promiseInProgress && (
        <Loader type="ThreeDots" color="#ffffff" height="15"/>
    )
  );
};

export default Spinner;