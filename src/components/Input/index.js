import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  showNewPasswordAgain,
  showNewPassword,
  showPassword,
} from "../../store/authSlice";
import "./_index.scss";
import Visible from "../../assets/img/IconComponent/Visible";
import Hidden from "../../assets/img/IconComponent/Hidden";

const Input = (props) => {
  const { ...rest } = props;
  const dispatch = useDispatch();
  const { showPassLogin, showNewPass, showNewPassAgain } = useSelector(
    (state) => state.auth
  );
  return (
    <>
      <input {...rest} />
      {props.secure != null && (
        <span
          className={props.secure}
          onClick={() => {
            props.name === "password"
              ? dispatch(showPassword())
              : props.name === "newPassword"
              ? dispatch(showNewPassword())
              : dispatch(showNewPasswordAgain());
          }}
        >
          {props.name === "password" && showPassLogin ? (
            <Visible />
          ) : props.name === "newPassword" && showNewPass ? (
            <Visible />
          ) : props.name === "newPasswordAgain" && showNewPassAgain ? (
            <Visible />
          ) : (
            <Hidden />
          )}
        </span>
      )}
    </>
  );
};
export default Input;
