import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import ReCAPTCHA from "react-google-recaptcha";
import Input from "../../../components/Input";
import Checkbox from "../../../components/Checkbox";
import Label from "../../../components/Label";
import Button from "../../../components/Button";
import Message from "../../../components/Message";
import BGrestaurant from "../../../assets/img/IconComponent/BGrestaurant";
import Logo from "../../../assets/img/IconComponent/Logo";
import Dots from "../../../assets/img/Dots.svg";
// import Modal from "../../../components/Modal";
import ForgotPassword from "../ForgotPassword";
import "./_index.scss";
import { showModal } from "../../../store/modalSlice";
import GoogleReCAPTCHA from "../../../components/ReCAPTCHA";

const initialValues = {
  email: "",
  password: "",
};
const onSubmit = (values) => {
  console.log("form data", values);
};

const validate = (values) => {
  let errors = {};
  if (!values.email) {
    errors.email = "Please enter your email address";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email format";
  }
  if (!values.password) {
    errors.password = "Please enter your password";
  }
  return errors;
};
const Login = () => {
  const { show } = useSelector((state) => state.auth);
  const { showPopup } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });
  return (
    <>
      <div className="login">
        <div className="login-design">
          <Logo className="login-logo" />
          <img src={Dots} className="login-design-dot1" alt="dot1" />
          <img src={Dots} className="login-design-dot2" alt="dot2" />
          <p className="login-design-description">
            Welcome to Migros Restaurant Panel
          </p>
          <BGrestaurant className="BGrestaurant" />
        </div>
        <form className="login-form" onSubmit={formik.handleSubmit}>
          <h3 className="login-form-title">Login</h3>
          <span className="login-form-description">
            Please enter your information and start your journey.
          </span>
          <div className="login-form-email">
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
          </div>
          <div className="login-form-password">
            <Label label="Password" />
            <Input
              type={show ? "text" : "password"}
              className={`input ${
                formik.errors.password && formik.touched.password && "error"
              }`}
              name="password"
              secure="show-password"
              // value={formik.values.password}
              onChange={(e) => {
                formik.setFieldValue("password", e.target.value);
                // formik.setValues((values) => {
                //   return { ...values, password: e.target.value };
                // });
              }}
              onBlur={formik.handleBlur}
            />
            {formik.errors.password && formik.touched.password ? (
              <Message text={formik.errors.password} status="error" />
            ) : null}
          </div>
          <div className="remember-forget-pass">
            <span className="remember-me">
              <Checkbox id="Login-check-remember-me" />
              <Label label="Remember me" htmlFor="Login-check-remember-me" />
            </span>
            <span
              className="forget-password"
              onClick={() => dispatch(showModal(true))}
            >
              Forgot password?
            </span>
          </div>
          <span className="verify-recaptcha">
            <GoogleReCAPTCHA />
          </span>
          <Button text="Login" className="button-login" />
          <p className="login-form-description-help">
            If you encounter a problem while logging into the system, please
            contact
            <span className="login-form-description-help-email">
              {" "}
              Yemekoperasyonekibi@migrosonline.com
            </span>
            .
          </p>
        </form>
      </div>
      {showPopup && <ForgotPassword />}
    </>
  );
};

export default Login;
