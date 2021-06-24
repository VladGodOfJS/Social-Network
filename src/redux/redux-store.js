import{applyMiddleware, combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import leftbarReducer from "./leftbar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
    dialogsPage:dialogsReducer,
    profilePage:profileReducer,
    leftbarPage:leftbarReducer,
    usersPage:usersReducer,
    auth:authReducer,
    form:formReducer,
})
let store = createStore(reducers,applyMiddleware(thunkMiddleware));

export default store;