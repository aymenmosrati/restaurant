import "./_index.scss";
import Input from "../../../components/Input";
import Label from "../../../components/Label";
import Logo from "../../../assets/img/IconComponent/Logo";
const Login = () => {
  return (
    <div className="login">
      <div className="login-design">
        <Logo className="login-logo" />
      </div>
      <form className="login-form">
        <h3 className="login-form-title">Giriş Yap</h3>
        <span className="login-form-description">
          Sisteme kayıtla e-posta adresinizle giriş yapabilirsiniz.
        </span>
        <div className="login-form-email">
          <Label label="E-posta Adresi" />
          <Input type="email" className="input" />
        </div>
        <div className="login-form-password">
          <Label label="Şifre" />
          <Input type="password" className="input" />
        </div>
        <div>
          <Input type="checkbox" className="" id="check" />
          <Label label="Beni Hatırla" for="check" />
          <span> Şifremi Unuttum</span>
        </div>

        <button></button>
      </form>
    </div>
  );
};

export default Login;
