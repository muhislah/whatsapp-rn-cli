import { ISearchAction } from "./reducerInteface";

const initialState = {
    searchPhrase: ""
};

const searchReducer = (state: { searchPhrase: string } = initialState, action: ISearchAction) => {
    switch (action.type) {
        case "SET_SEARCHPHRASE":
            return {
                ...state,
                searchPhrase: action.searchPhrase
            }
        case "RESET_SEARCHPHRASE":
            return {
                ...state,
                searchPhrase: ""
            }
        default:
            return {
                state
            }
    }

}

export default searchReducer