import React from "react";
import { Dna } from "react-loader-spinner";
import "./loading.scss";

const Loading = (props) => {
  return (
    <div
      className={
        !props.isLoading ? "loading_screen invisible" : "loading_screen"
      }
    >
      <Dna
        visible={props.isLoading}
        height="100"
        width="100"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>
  );
};

export default Loading;
