import { takeLatest } from "redux-saga/effects";
import { ADD_USER, DELETE_USER, GET_ALL_USERS, UPDATE_USER } from "../actions/actionTypes";
import { handleAddUser, handleDeleteUser, handleGetUsers, handleUpdateUser } from "./handlers";

export function* watcherSaga(){
    yield takeLatest(GET_ALL_USERS,handleGetUsers);
    yield takeLatest(ADD_USER,handleAddUser);
    yield takeLatest(DELETE_USER,handleDeleteUser);
    yield takeLatest(UPDATE_USER,handleUpdateUser)
}