import { combineReducers } from "redux";
import { accessToken, AccessToken } from './session/reducer'

/**
 * This is the root state of the app
 * It contains every substate of the app
 */
export interface AppState {
    accessToken: AccessToken
}

// Combine the reducers into one and export them
export const rootReducer = combineReducers<AppState>({
    accessToken: accessToken
})