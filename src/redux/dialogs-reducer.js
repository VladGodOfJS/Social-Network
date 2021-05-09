const ADD_NEW_DIALOG = "ADD-NEW-DIALOG";
const UPDATE_DIALOG_POST = "UPDATE-DIALOG-POST";

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
  newDialogText: "new dialogs",
}
const dialogsReducer = (state=initialState, action) => {
  switch (action.type) {
    case ADD_NEW_DIALOG:
      let newDialog = state.newDialogText;
      state.messages.push({
        id: "7",
        text: newDialog,
      });
      state.newDialogText = " ";
      return state;

    case UPDATE_DIALOG_POST:
      state.newDialogText = action.newMessage;
      return state;

    default:
      return state;
  }
};

export const addDialogActionCreator = () => {
  return { type: ADD_NEW_DIALOG };
};

export const changeDialogPostActionCreator = (message) => {
  return { type: UPDATE_DIALOG_POST, newMessage: message };
};

export default dialogsReducer;
