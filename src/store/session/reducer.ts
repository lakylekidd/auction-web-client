import { Action } from "./actions";


export interface AccessToken {
    isFetching: boolean
    accessToken?: string
}

export interface SessionState {
    accessToken: AccessToken
}

const initialState: AccessToken = { isFetching: false };

export const accessToken = (state: AccessToken = initialState, action: Action) => {
    switch (action.type) {
        case "SET":
            return {
                ...state,
                accessToken: action.accessToken
            }
        case "SET_FETCHING":
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state;
    }
}