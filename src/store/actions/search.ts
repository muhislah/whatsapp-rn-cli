
const setSearchPhrase = (searchPhrase: string) => {
    return {
        type: "SET_SEARCHPHRASE",
        searchPhrase: searchPhrase
    }
}

const resetSearchPhrase = () => {
    return {
        type: "RESET_SEARCHPHRASE",
        searchPhrase: ""
    }
}

export default {
    setSearchPhrase,
    resetSearchPhrase
}