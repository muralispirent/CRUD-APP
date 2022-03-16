import { call, put } from 'redux-saga/effects'
import { setAllUsersAction } from '../../actions';
import { addUserRequest, deleteUserRequest, requestForUsers, updateUserRequest } from "../requests";

export function* handleGetUsers(): Generator<any> {
    try {
        const response: any = yield call(requestForUsers)
        const { data } = response
        yield put(setAllUsersAction(data))
    } catch (error) {
        console.log(error)
    }
}

export function* handleAddUser(user: any): Generator<any> {
    try {
        console.log(user)
        const res: any = yield call(addUserRequest, user.payload);
        const response: any = yield call(requestForUsers)
        const { data } = response
        yield put(setAllUsersAction(data))
    } catch (error) {

    }
}

export function* handleDeleteUser(user: any): Generator<any> {
    try {
        const res: any = yield call(deleteUserRequest, user.payload);
        const response: any = yield call(requestForUsers)
        const { data } = response
        yield put(setAllUsersAction(data))
    } catch (error) {

    }
}

export function* handleUpdateUser(user: any): Generator<any> {
    try {
        const res: any = yield call(updateUserRequest, user.payload);
        const response: any = yield call(requestForUsers)
        const { data } = response
        yield put(setAllUsersAction(data))
    } catch (error) {

    }
}