import React from "react";
import "./_index.scss";
import ICError from "../../assets/img/IcError.svg";
import ICSuccess from "../../assets/img/IcSuccess.svg";
import ICWarning from "../../assets/img/IcWarning.svg";

const Message = (props) => {
  // status="error" // success // warning
  // const IconMessage = () => {
  //   if (props.status === "success") {
  //     return <img src={ICSuccess} alt="ICSuccess" />;
  //   } else if (props.status === "warning") {
  //     return <img src={ICWarning} alt="ICWarning" />;
  //   } else if (props.status === "error") {
  //     return <img src={ICError} alt="ICError" />;
  //   }
  // };

  return (
    <>
      <p className={`message ${props.status}`}>
        {/* {IconMessage}  */}
        {props.text}
      </p>
    </>
  );
};
export default Message;
