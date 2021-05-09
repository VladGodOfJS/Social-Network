import{combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import leftbarReducer from "./leftbar-reducer";

let reducers = combineReducers({
    dialogsPage:dialogsReducer,
    profilePage:profileReducer,
    leftBarPage:leftbarReducer,
})
let store = createStore(reducers);

export default store;