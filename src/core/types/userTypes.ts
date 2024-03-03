import { Dispatch, SetStateAction } from "react"

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

export type UseAuthTypes = {
  isAuth: boolean
  setIsAuth: Dispatch<SetStateAction<boolean>>
}