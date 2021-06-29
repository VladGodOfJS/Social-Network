import { authAPI } from "../api/api";

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER_DATA": {
      return {
        ...state,
        ...action.data,
      };
    }
  }
  return state;
};

export const setAuthUserData = (id, email, login,isAuth) => {
  return {
    type: "SET_USER_DATA",
    data: {
      id,
      email,
      login,
      isAuth,
    },
  };
};


export const setLogin=()=>{
    return {
        type:"SET_LOGIN",
    }
}

export const setAuthMeThunkCreator = () => {
  return (dispatch) => {
    authAPI.setAuthMe().then((data) => {
      if (data.resultCode === 0) {
        let { id, email, login } = data.data;
        dispatch(setAuthUserData(id, email, login,true));
      }
    });
  };
};

export const loginThunkCreator=(login,password,rememberMe)=>{
    return (dispatch)=>{
        authAPI.login(login,password,rememberMe).then(resp=>{
            if(resp.data.resultCode===0){
              dispatch (setAuthMeThunkCreator());
            }
           })
    }
}

export const logoutThunkCreator=()=>{
     return(dispatch)=>{
          authAPI.logout().then(resp=>{
              if(resp.data.resultCode===0){
                  dispatch(setAuthUserData(null,null,null,false));
              }
          })
     }
}



export default authReducer;
