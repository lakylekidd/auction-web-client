import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import Advertisement from "./models";
import { AnyAction, ActionCreator, Dispatch, Action } from 'redux';
import * as request from 'superagent';

/**
 * Definitions of every action name constant
 * for Advertisements
 */
export enum ActionTypes {
    GET_ADVERTISEMENTS = 'GET_ADVERTISEMENTS',
    SET_ADVERTISEMENTS = 'SET_ADVERTISEMENTS'
}

export interface GetAdvertAction {
    type: ActionTypes.GET_ADVERTISEMENTS
}

export interface SetAdvertAction {
    type: ActionTypes.SET_ADVERTISEMENTS,
    payload: {
        advertisements: Advertisement[]
    }
}

export const setAdvertisements = (advertisements: Advertisement[]): SetAdvertAction => {
    return {
        type: ActionTypes.SET_ADVERTISEMENTS,
        payload: {
            advertisements: advertisements
        }
    }
}

// // Thunk Action
// const incrementWithDelay = () => async (dispatch: Dispatch): Promise<void> => {
//     setTimeout(() => dispatch(countersActions.increment()), 1000);
//   };

export const getAdvertisements = () => async (dispatch: Dispatch): Promise<void> => {
    request
        .get('https://auction-web-api.herokuapp.com')
        .then(result => {
            dispatch({
                type: ActionTypes.SET_ADVERTISEMENTS,
                payload: {
                    advertisements: result
                }
            })
        })
        .catch(console.error);
}