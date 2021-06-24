import React from "react";
import s from "./Users.module.scss";
import { NavLink } from "react-router-dom";

const Users = (props) => {
  let pagesCount = Math.ceil(props.userCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <>
      <div className={s.pages}>
        {pages.map((p) => {
          return (
            <div
              key={p}
              className={props.currentPage === p && s.current_page}
              onClick={() => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </div>
          );
        })}
      </div>
      <div className={s.users}>
        {props.users.map((users) => {
          return (
            <div className={s.users_wrapp} key={users.id}>
              <div className={s.avatar_body}>
                <NavLink to={"/profile/" + users.id}>
                  <img
                    src={
                      users.photos.small != null
                        ? users.photos.small
                        : "https://okeygeek.ru/wp-content/uploads/2020/03/no_avatar.png"
                    }
                    alt="ava"
                    className={s.ava}
                  />
                </NavLink>
                {users.followed ? (
                  <button
                    disabled={props.followingInProgress}
                    className={s.btn}
                    onClick={() => {
                      props.followThunkCreator(users.id);
                    }}
                  >
                    unfollow
                  </button>
                ) : (
                  <button
                    disabled={props.followingInProgress}
                    className={s.btn}
                    onClick={() => {
                      props.unfollowThunkCreator(users.id);
                    }}
                  >
                    follow
                  </button>
                )}
              </div>
              <div className={s.info_window}>
                <div className={s.left_text}>
                  <p className={s.name}>{users.name}</p>
                  <p className={s.status}>
                    {users.status == null ? "hello world" : users.status}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Users;
