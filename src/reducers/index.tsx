import { Reducer } from "redux";
import { SET_ALL_USERS } from "../actions/actionTypes";

const defaultState = {
    users: []
}

export const rootReducer: Reducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_ALL_USERS:
            return { ...state, users: action.payload }

        default:
            return state
    }
}