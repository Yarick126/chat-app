import { useMutation } from "@tanstack/react-query"
import { loginUser, registerUser } from "../api"
import { useAuth } from "./useAuth"


export const useLoginUser = () => {

  const {isAuth, setIsAuth} = useAuth()

  return useMutation({
    mutationFn: loginUser,
    mutationKey: ['loginUser'],

    onSuccess: ()=> {
      setIsAuth(true)
      console.log(isAuth)}

  })
}

export const useRegister = () => {
  const {isAuth, setIsAuth} = useAuth()

  return useMutation({
    mutationFn: registerUser,
    mutationKey: ['registerUser'],
    onSuccess: ()=> {
      setIsAuth(true)
      console.log(isAuth)}
  })
}