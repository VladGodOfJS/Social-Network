import s from "./Login.module.scss";
import { Field, reduxForm } from "redux-form";
import { Input } from "../../common/FormControls/FormControls";
import { required } from "../../../utils/validators/validators";
import { connect } from "react-redux";
import { loginThunkCreator } from "../../../redux/auth-reducer";
import { Redirect } from "react-router";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} class={s.form}>
      <Field
        validate={[required]}
        placeholder={"enter Name"}
        component={Input}
        name={"login"}
      />
      <Field
        validate={[required]}
        placeholder={"enter Password"}
        component={Input}
        name={"password"}
      />
      <Field type={"checkbox"} component={Input} name={"rememberMe"} />
      <button>Enter</button>
    </form>
  );
};

let LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.loginThunkCreator(
      formData.login,
      formData.password,
      formData.rememberMe
    );
    
  };

   
  return (
    props.isAuth?<Redirect to={'/profile'}/>:
    <div className="login">
      <h2>Login</h2>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, { loginThunkCreator })(Login);
