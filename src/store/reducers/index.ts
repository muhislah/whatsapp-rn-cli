import { combineReducers } from 'redux'
import searchReducer from "./searchReducer";
import messagesReducer from "./messagesReducer"

const rootReducer = combineReducers({
    search: searchReducer,
    messages: messagesReducer,
})

export default rootReducer