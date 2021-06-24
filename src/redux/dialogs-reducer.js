const ADD_NEW_DIALOG = "ADD-NEW-DIALOG";

let initialState ={
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
}
const dialogsReducer = (state=initialState, action) => {
  switch (action.type) {
    case ADD_NEW_DIALOG:
      let newDialog={
          id: "7",
          text: action.newDialogText,
      }
      return {
        ...state,
        messages:[...state.messages,newDialog],
        
      }

    default:
      return state;
  }
};

export const addDialogActionCreator = (newDialogText) => {
  return { type: ADD_NEW_DIALOG,newDialogText };
};


export default dialogsReducer;
