import React from "react";
import "./_index.scss";

const Label = (props) => {
  const { label, icon, ...rest } = props;
  return (
    <label {...rest}>
      {icon && icon}
      {label}
    </label>
  );
};
export default Label;
