import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import {
  setCurrentPage,
  getUsersThunkCreator,
  followThunkCreator,
  unfollowThunkCreator,
} from "../../../redux/users-reducer";
import Preloader from "../../common/Preloader/Preloader";
import { compose } from "redux";

class UsersContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getUsersThunkCreator(this.props.pageSize,this.props.currentPage)
  }
  onPageChanged = (currentPage) => {
    this.props.getUsersThunkCreator(this.props.pageSize,currentPage)
  };

  render() {
    return (
      <>
        {this.props.isFetching? <Preloader/> : null}
        <Users
          users={this.props.users}
          userCount={this.props.userCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          followingInProgress={this.props.followingInProgress}
          togglefollowingInProgress={this.props.togglefollowingInProgress}
          followThunkCreator={this.props.followThunkCreator}
          unfollowThunkCreator={this.props.unfollowThunkCreator}

        />
      </>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    userCount: state.usersPage.userCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress:state.usersPage.followingInProgress,
  };
};


export default compose(
  connect(mapStateToProps, {setCurrentPage, getUsersThunkCreator,followThunkCreator,unfollowThunkCreator}),
)(UsersContainer)

