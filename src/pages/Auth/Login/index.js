import ReCAPTCHA from "react-google-recaptcha";
import "./_index.scss";
import Input from "../../../components/Input";
import Label from "../../../components/Label";
import Button from "../../../components/Button";
import Logo from "../../../assets/img/IconComponent/Logo";
const Login = () => {
  return (
    <div className="login">
      <div className="login-design">
        <Logo className="login-logo" />
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
        <div>
          <Input type="checkbox" className="" id="check" />
          <Label label="Remember me" for="check" />
          <span> I forgot my password</span>
        </div>
        <ReCAPTCHA sitekey="6Lc4m1skAAAAAPWWeYgkqt89o3OEkCJ7dio74T7c" />
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
