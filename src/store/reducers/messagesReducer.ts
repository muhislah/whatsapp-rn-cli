import { IMessageAction, IMessageState } from "./reducerInteface";

const initialState = {
    markedId: null,
    data: []
};

export const messagesReducer = (state: IMessageState = initialState, action: IMessageAction) => {
    switch(action.type){
        case "MARK_MESSAGE": {
            return {
                ...state,
                markedId: state.markedId === action.payload ? null : action.payload
            }
        }
        case "MARK_RESET": {
            return {
                ...state,
                markedId: null
            }
        }
        case "SET_MESSAGES": {
            return {
                ...state,
                data : [...action.payload]
            }
        }
        case "ADD_MESSAGE": {
            if (state.data) {
                return {
                    ...state,
                    data: [...state.data, action.payload]
                }
            }
            else {
                return {
                    ...state,
                    data : [{
                        id: action.payload.id, 
                        sender: action.payload.sender, 
                        message: action.payload.message, 
                        emoji: null,
                        time: action.payload.time
                    }]
                }
            }
        }

        case "UPDATE_MESSAGE": {
            return {
                ...state,
                data: state.data.map(item => {
                    if (item.id === action.payload.id) {
                        return { ...item, emoji: action.payload.emoji }
                    } 
                    return item
                })
            }
        }
        case "RESET_MESSAGES":
            return {
                data: []
            }
        default:
            return  {
                state
            }
    }
    
}

export default messagesReducer