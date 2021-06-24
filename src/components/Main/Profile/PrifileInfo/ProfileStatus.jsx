import React from "react";
class ProfileStatus extends React.Component {
  constructor(props){
    super(props)
  }
  state = {
    editMode: false,
    status:this.props.status,
  };


  activeteEditeMode=()=>{
    this.setState({
      editMode:true,
  })
  }

  deactiveteEditeMode=()=>{
    this.setState({
        editMode:false,
    })

    this.props.updateUserStatusThunkCreator(this.state.status);
}

onStatusChange=(e)=>{
  this.setState({
    status:e.currentTarget.value,
})
}

componentDidUpdate(prevProps,prevState){
   if(prevProps.status !== this.props.status){
           this.setState({
             status:this.props.status
           })
   }
  console.log('did update')
}

  render() {
    return (
      <>
        {
        !this.state.editMode ? 
        <button onClick={this.activeteEditeMode}>{this.props.status || "no status"}</button>:
        <input autoFocus={true} onChange={this.onStatusChange}   onBlur={this.deactiveteEditeMode} value={this.state.status} type="text" /> 
        }
      </>
    );
  }
}

export default ProfileStatus;
