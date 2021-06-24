import { authAPI } from "../api/api";

let initialState={
    id:null,
    email:null,
    login:null,
    isAuth:false,
}


const authReducer=(state=initialState,action)=>{

    switch(action.type){
        
        case "SET_USER_DATA":{
           return {
               ...state,
               ...action.data,
               isAuth:true,
           }
        }
    }
    return state;
}

export const setAuthUserData =(id,email,login)=>{
    return {
        type:"SET_USER_DATA",
        data:{
            id,
            email,
            login
        }
    }
}

export const setAuthMeThunkCreator =()=>{
    return (dispatch)=>{
        authAPI.setAuthMe().then((data) => {
            if (data.resultCode == 0) {
              let { id, email, login } = data.data;
             dispatch(setAuthUserData(id, email, login));
            }
          });
    }
}

export const setLoginThunkCreator =()=>{
    return (dispatch)=>{
        authAPI.getLogin().then((data) => {
            if(data.result==0){
                console.log(true);
            }
          });
    }
}



export default authReducer