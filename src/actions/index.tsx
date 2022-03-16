import { ADD_USER, DELETE_USER, GET_ALL_USERS, SET_ALL_USERS, UPDATE_USER } from "./actionTypes"

export const getAllUsersAction = () => ({ type: GET_ALL_USERS })

export const setAllUsersAction = (users: any) => ({ type: SET_ALL_USERS, payload: users });

export const addUserAction = (user: any) => ({ type: ADD_USER, payload: user })

export const deleteUserAction = (user: any) => ({ type: DELETE_USER, payload: user })

export const updateUserAction = (user: any) => ({ type: UPDATE_USER, payload: user })
