import { Dispatch } from "react"

export type IIsAuth = {
  isAuth: boolean
  setIsAuth: Dispatch<React.SetStateAction<boolean>>
}