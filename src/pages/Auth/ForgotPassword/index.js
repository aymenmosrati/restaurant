import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import Input from "../../../components/Input";
import Label from "../../../components/Label";
import ReCAPTCHA from "react-google-recaptcha";
import Modal from "../../../components/Modal";
import Button from "../../../components/Button";
import "./_index.scss";
import { showModal } from "../../../store/modalSlice";
import Message from "../../../components/Message";
import GoogleReCAPTCHA from "../../../components/ReCAPTCHA";
import { newPassword } from "../../../store/authSlice";

const ForgotPassword = () => {
  const initialValues = {
    email: "",
  };
  const onSubmit = (values) => {
    dispatch(newPassword());
    dispatch(showModal(false));
  };
  const validate = (values) => {
    let errors = {};
    if (!values.email) {
      errors.email = "Please enter your email address";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email format";
    }
    return errors;
  };
  let dispatch = useDispatch();
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });
  return (
    <Modal>
      <div className="modale-title">
        <p className="modale-title-name">Forgot Password</p>
        <span
          className="modale-close"
          onClick={() => dispatch(showModal(false))}
        >
          &times;
        </span>
      </div>
      <p className="modal-description">
        Please enter your registered e-mail address, where we can send you the
        link to reset your new password.
      </p>
      <form className="modal-form-email" onSubmit={formik.handleSubmit}>
        <Label label="E-mail address" />
        <Input
          type="email"
          className={`input ${
            formik.errors.email && formik.touched.email && "error"
          }`}
          name="email"
          //  value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.email && formik.touched.email ? (
          <Message text={formik.errors.email} status="error" />
        ) : null}
      </form>
      <GoogleReCAPTCHA />
      <Button
        text="Send"
        className="button-login modal-btn-login"
        onClick={formik.handleSubmit}
      />
    </Modal>
  );
};

export default ForgotPassword;
