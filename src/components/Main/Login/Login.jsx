import s from "./Login.module.scss";
import { Field, reduxForm } from "redux-form";
import * as axios from "axios";


const LoginForm = (props) => {

  return (
    <form onSubmit={props.handleSubmit} class={s.form}>
      <Field placeholder={"enter Name"} component={"input"} name={"login"} />
      <Field
        placeholder={"enter Password"}
        component={"input"}
        name={"password"}
      />
      <Field type={"checkbox"} component={"input"} name={"rememberMe"} />
      <button>Enter</button>
    </form>
  );
};

let LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = (props) => {
    const onSubmit=(formData)=>{
      console.log(formData)
      axios.post("https://social-network.samuraijs.com/api/1.0/auth/login",{email:"vladka910@gmail.com",password:"gfhjkmgf"},{},
      {
        withCredentials: true,
        headers: {
          "API-KEY": "286ace4f-96ef-49d4-9438-e02eac859f28",
        },
      }
      ).then(resp=>{
        return console.log(resp.data);
      })
      
    }
  return (
    <div className="login">
      <h2>Login</h2>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default Login;
