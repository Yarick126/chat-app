import { Dispatch, SetStateAction } from "react"
import { IUser } from "../models/IUser"

export type LoginTypes = {
  email: string
  password: string
}

export type RegisterTypes = {
  firstName: string
  secondName: string
  age: number
  email: string
  password: string
}

export type UserData  =  {
  id: number
  firstName: string
  secondName: string
  age: number
  email: string
}

export type UseAuthTypes = {
  isAuth: boolean
  setIsAuth: Dispatch<SetStateAction<boolean>>
}

export type AuthResponse = {
  refreshToken: string
  accessToken: string
  user: IUser
}