import React from "react";
import { useDispatch } from "react-redux";
import { showPassword } from "../../store/authSlice";
import "./_index.scss";

const Input = (props) => {
  const { ...rest } = props;
  const dispatch = useDispatch();
  return (
    <>
      <input {...rest} />
      {props.secure != null && (
        <span className={props.secure} onClick={() => dispatch(showPassword())}>
          Show
        </span>
      )}
    </>
  );
};
export default Input;
