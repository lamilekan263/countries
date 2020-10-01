import React from "react";

import Loader from "react-loader-spinner";

import './Loader.css'

const LoaderSpinner = () => {
    return (
      <Loader
        className="react__spinner"
        type="ThreeDots"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={4000}
      />
    );
}


export default LoaderSpinner
 