import Header from "./Header";
import React from "react";
import { connect } from "react-redux";
import {setAuthMeThunkCreator,logoutThunkCreator} from "../../redux/auth-reducer";


class HeaderContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.setAuthMeThunkCreator();
  }

  render() {
    return (
      <>
        <Header {...this.props} />
      </>
    );
  }
}

let mapStateToProps = (state) => ({
  auth: state.auth,
  isAuth: state.auth.isAuth,
});
export default connect(mapStateToProps, {setAuthMeThunkCreator,logoutThunkCreator })(
  HeaderContainer
);
