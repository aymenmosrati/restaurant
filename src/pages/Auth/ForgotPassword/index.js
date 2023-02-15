import React from "react";
import Input from "../../../components/Input";
import Label from "../../../components/Label";
import ReCAPTCHA from "react-google-recaptcha";
import Modal from "../../../components/Modal";
import Button from "../../../components/Button";
import "./_index.scss";

const ForgotPassword = () => {
  return (
    <Modal>
      <div className="modale-title">
        <p className="modale-title-name">Forgot Password</p>
        <span className="modale-close">&times;</span>
      </div>
      <p className="modal-description">
        Please enter your registered e-mail address, where we can send you the
        link to reset your new password.
      </p>
      <div className="modal-form-email">
        <Label label="E-mail address" />
        <Input type="email" className={`input`} name="email" />
      </div>
      <span className="verify-recaptcha">
        <ReCAPTCHA sitekey="6Lc4m1skAAAAAPWWeYgkqt89o3OEkCJ7dio74T7c" />
      </span>
      <Button text="Send" className="button-login modal-btn-login" />
    </Modal>
  );
};

export default ForgotPassword;
