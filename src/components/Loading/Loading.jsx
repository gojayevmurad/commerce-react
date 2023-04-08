import React from "react";
import { ColorRing } from "react-loader-spinner";
import "./loading.scss";

const Loading = (props) => {
  return (
    <div
      className={
        !props.isLoading ? "loading_screen invisible" : "loading_screen"
      }
    >
      <ColorRing
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
