import axios from "axios";
import { User } from "../../Models";

export function requestForUsers(){
    return axios.get("http://localhost:3000/users")
}

export function addUserRequest(user:User){
    return axios.post("http://localhost:3000/users",user)
}

export function deleteUserRequest(user:User){
    return axios.delete("http://localhost:3000/users/"+user.id)
}

export function updateUserRequest(user:User){
    return axios.put("http://localhost:3000/users/"+user.id,user)
}