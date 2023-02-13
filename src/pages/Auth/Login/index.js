import ReCAPTCHA from "react-google-recaptcha";
import "./_index.scss";
import Input from "../../../components/Input";
import Checkbox from "../../../components/Checkbox";
import Label from "../../../components/Label";
import Button from "../../../components/Button";
import Message from "../../../components/Message";
import BGrestaurant from "../../../assets/img/IconComponent/BGrestaurant";
import Logo from "../../../assets/img/IconComponent/Logo";
import Dots from "../../../assets/img/Dots.svg";

const Login = () => {
  return (
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
      <form className="login-form">
        <h3 className="login-form-title">Login</h3>
        <span className="login-form-description">
          You can log in to the system with your e-mail address.
        </span>
        <div className="login-form-email">
          <Label label="E-mail address" />
          <Input type="email" className="input" />
        </div>
        <div className="login-form-password">
          <Label label="Password" />
          <Input type="password" className="input" />
        </div>
        <div className="remember-forget-pass">
          <span className="remember-me">
            <Checkbox id="Login-check-remember-me" />
            <Label label="Remember me" for="Login-check-remember-me" />
          </span>
          <span className="forget-password"> I forget my password?</span>
        </div>
        <span className="verify-recaptcha">
          <ReCAPTCHA sitekey="6Lc4m1skAAAAAPWWeYgkqt89o3OEkCJ7dio74T7c" />
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
  );
};

export default Login;
