import React from "react";
import "./_index.scss";

const index = (props) => {
  return (
    <label className="cl-checkbox">
      <input type="checkbox" id={props.id} />
      <span></span>
    </label>
  );
};

export default index;
