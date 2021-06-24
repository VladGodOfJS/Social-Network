import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import{getProfileThunkCreator,getUserStatusThunkCreator,updateUserStatusThunkCreator} from "../../../redux/profile-reducer";
import { withRouter } from "react-router";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import { compose } from "redux";




class ProfileContainer extends React.Component{

    constructor(props){
        super(props)
    }

    componentDidMount(){

        let userId = this.props.match.params.userId;
        if(!userId){
            userId=2
        }
        this.props.getProfileThunkCreator(userId)
        this.props.getUserStatusThunkCreator(userId)
    }

    render(){
        return(
            <Profile {...this.props}/>
        );
    }
}

let mapStateToProps=(state)=>{
return{
    profile:state.profilePage.profile,
    status:state.profilePage.status,
}
}

export default compose(
    connect(mapStateToProps,{getProfileThunkCreator,getUserStatusThunkCreator,updateUserStatusThunkCreator}),
    withRouter,
    withAuthRedirect,
    
  )(ProfileContainer)

