import { rerendeEntieretree } from "../render";

let state = {
dialogsPage:{
  names: [
    {
      id: "1",
      name: "Vlad",
    },
    {
      id: "2",
      name: "Diana",
    },
    {
      id: "3",
      name: "Vova",
    },
    {
      id: "4",
      name: "Vitaliy",
    },
    {
      id: "5",
      name: "Lera",
    },
    {
      id: "6",
      name: "Sasha",
    },
  ],
  messages: [
    { id: "1", text: "Hello friend" },
    { id: "2", text: "Коли спати" },
    { id: "3", text: "I am ok" },
    { id: "4", text: "See you later" },
    { id: "5", text: "Ky" },
    { id: "6", text: "Give me money" },
  ],
  newDialogText:"new dialogs"
},
profilePage:{
  myPosts: [
    {
      id: "1",
      text: "Hello World",
      count: "5",
    },
    {
      id: "2",
      text: "My name is Vlad",
      count: "17",
    },
  ],
  newPostText:" new post from post"
},
leftBarPage:{
  friends:[
    {
      id:"1",
      name:"Misha",
      url:"https://st.depositphotos.com/1779253/5140/v/600/depositphotos_51402215-stock-illustration-male-avatar-profile-picture-use.jpg",
    },
    {
      id:"2",
      name:"Ivan",
      url:"https://st.depositphotos.com/1779253/5140/v/600/depositphotos_51402215-stock-illustration-male-avatar-profile-picture-use.jpg",
    },
    {
      id:"3",
      name:"Artemida",
      url:"https://st.depositphotos.com/1779253/5140/v/600/depositphotos_51402215-stock-illustration-male-avatar-profile-picture-use.jpg",
    },
  ]
  
}

};

export const addNewDialog=()=>{
  let newDialogPost={
    id:"7",
    text:state.dialogsPage.newDialogText,
  }
  state.dialogsPage.messages.push(newDialogPost);
  state.dialogsPage.newDialogText=" ";
  
  rerendeEntieretree(state);
}

export const updateDialogPost=(message)=>{
  
  state.dialogsPage.newDialogText=message;
  rerendeEntieretree(state);
}

export const updateNewPost=(message)=>{
  state.profilePage.newPostText= message;
  rerendeEntieretree(state);
}
export const addPost =()=>{
  let newPost ={
    id:'5',
    text:state.profilePage.newPostText,
    count:'0'
  }
  state.profilePage.myPosts.push(newPost);

  rerendeEntieretree(state);
}


export default state;
