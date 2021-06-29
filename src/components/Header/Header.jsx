import { NavLink } from "react-router-dom";
import Preloader from "../common/Preloader/Preloader";
import s from "./Header.module.scss";

const Header = (props) => {
  return (
    <div className={s.header}>
      <div className="container">
        <div className={s.inner}>
          <a href="/" className={s.logo}>
            <img
              className={s.img}
              src="http://demo.nrgthemes.com/projects/nrgnetwork/img/logo.png"
              alt="logo"
            />
          </a>
          {props.isAuth ? (
            <div> {props.auth.login} <button onClick={props.logoutThunkCreator} >Log Out</button></div>
          ) : (
            <NavLink className={s.login_text}  to="/login">Login</NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
