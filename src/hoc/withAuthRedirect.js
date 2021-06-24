import { Redirect } from "react-router";
import React from "react";
import {connect} from "react-redux";


export const withAuthRedirect =(Component)=>{

    const RedirectComponent =(props)=>{
                    if(!props.isAuth){
                return <Redirect to="/login"/>
            }
        return(
            <Component {...props}/>
        );
    }

    let mapStateToPropsForRedirect=(state)=>{
        return{
            isAuth:state.auth.isAuth
        }
        }
       
        let ConnectAuthRedirectComponent= connect(mapStateToPropsForRedirect)(RedirectComponent);
        return ConnectAuthRedirectComponent
  
    // class RedirectComponent extends React.Component{
    //     render(){
    //         if(!this.props.isAuth){
    //             return <Redirect to="/login"/>
    //         }
          
    //         return <Component {...this.props}/>
    //     }
    // }

}