import { combineReducers } from "redux";
import { accessToken, AccessToken } from './session/reducer'

/**
 * This is the root state of the app
 * It contains every substate of the app
 */
export interface AppState {
    token: AccessToken
}

// Combine the reducers into one and export them
export const reducer = combineReducers<AppState>({
    token: accessToken
})