import axios from "axios"
import { LoginTypes, RegisterTypes } from "./types/userTypes"


const apiUrl = 'http://localhost:5000/api/auth/'

export const loginUser = async(data: LoginTypes) =>{

  return axios.post<any, any, LoginTypes>(apiUrl + `${'login'}`,data)
}
export const registerUser = async(data: RegisterTypes) =>{

  return axios.post<any, any, RegisterTypes>(apiUrl + `${'register'}`,data)
}