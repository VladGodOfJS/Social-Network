import{combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import leftbarReducer from "./leftbar-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    dialogsPage:dialogsReducer,
    profilePage:profileReducer,
    leftbarPage:leftbarReducer,
    usersPage:usersReducer,
})
let store = createStore(reducers);

export default store;