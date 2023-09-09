
export interface IMessage {
    id: number
    sender: string
    message: string
    emoji: string | null
    time: string
}

export interface IMessageState {
    markedId: string | number | null,
    data: IMessage[]
}

export interface IMessageAction {
    type: string,
    payload: any,
}

export interface ISearchState {
    searchPhrase: string
}

export interface ISearchAction {
    type: string
    searchPhrase: string
}