import { IMessage } from "../reducers/reducerInteface"

const markMessage = (id: string) => {
    return {
        type: "MARK_MESSAGE",
        payload: id
    }
}

const markReset = () => {
    return {
        type: "MARK_RESET",
    }
}

const setMessages = (messages: IMessage) => {
    return {
        type: "SET_MESSAGES",
        payload: messages
    }
}

const addMessage = (message: IMessage) => {
    return {
        type: "ADD_MESSAGE",
        payload: message
    }
}

const updateMessage = (id: number, emoji: string) => {
    return {
        type: "UPDATE_MESSAGE",
        payload: { id, emoji }
    }
}

const resetMessages = () => {
    return {
        type: "RESET_MESSAGES"
    }
}

export default {
    markMessage,
    markReset,
    setMessages,
    addMessage,
    updateMessage,
    resetMessages
}