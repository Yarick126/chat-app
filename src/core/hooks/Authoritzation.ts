import { useMutation } from "@tanstack/react-query"
import { loginUser } from "../api"
import { useAuth } from "./useAuth"

export const useLoginUser = () => {

  const {isAuth, setIsAuth} = useAuth()

  return useMutation({
    mutationFn: loginUser,
    mutationKey: ['loginUser'],
    onSuccess: ()=> {
      setIsAuth(true)
      console.log(isAuth)},
    onError: () => {
      alert('ERROR!!!')
    }
  })
}

export const useRegister = () => {
  const {isAuth, setIsAuth} = useAuth()

  
}