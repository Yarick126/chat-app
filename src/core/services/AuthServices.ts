import axios, { AxiosResponse } from "axios"
import { AuthResponse, LoginTypes, RegisterTypes } from "../types/userTypes"
import $Y from "../api"



class AuthService {

  static loginUser = async(userData: LoginTypes) : Promise<AxiosResponse<AuthResponse>> =>{
    return await $Y.post<AuthResponse>('login',userData)
  }

  static registerUser = async(userData: RegisterTypes) : Promise<AxiosResponse<AuthResponse>> =>{
    return await $Y.post<AuthResponse>('register',userData)
  }

  static logout = async() : Promise<void> => {
    return await $Y.post('logout')
  }
}

export default AuthService