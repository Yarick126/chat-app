import axios from "axios"
import { LoginTypes } from "./types/login-types"
import { RegisterTypes } from "./types/regiter-types"

const apiUrl = 'http://localhost:5000/api/auth/'

export const loginUser = async(data: LoginTypes) =>{

  return axios.post(apiUrl + `${'login'}`,data)
}
export const registerUser = async(data: RegisterTypes) =>{

  return axios.post(apiUrl + `${'register'}`,data)
}