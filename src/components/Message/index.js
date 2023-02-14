import React from "react";
import "./_index.scss";
import ICError from "../../assets/img/IcError.svg";
import ICSuccess from "../../assets/img/IcSuccess.svg";
import ICWarning from "../../assets/img/IcWarning.svg";

const Message = (props) => {
  return (
    <>
      <p className={`message ${props.status}`}>
        <img
          src={
            props.status === "error"
              ? `${ICError}`
              : props.status === "success"
              ? `${ICSuccess}`
              : `${ICWarning}`
          }
          alt={`IC${props.status}`}
        />
        {props.text}
      </p>
    </>
  );
};
export default Message;
