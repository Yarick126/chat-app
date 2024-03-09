import { useMutation } from "@tanstack/react-query"
import AuthService from "../services/AuthServices"
import { useAuth } from "./useAuth"
import { useNavigate } from "react-router-dom"


export const useLoginUser = () => {

  const {setIsAuth} = useAuth()
  const navigate = useNavigate()

  return useMutation({
    mutationFn: AuthService.loginUser,
    mutationKey: ['loginUser'],

    onSuccess: ()=> {
      setIsAuth(true)
      navigate('/chat')
    }
  })
}

export const useRegister = () => {
  const {isAuth, setIsAuth} = useAuth()

  return useMutation({
    mutationFn: AuthService.registerUser,
    mutationKey: ['registerUser'],
    onSuccess: ()=> {
      setIsAuth(true)
      console.log(isAuth)}
  })
}

export const useLogoutUser = () => {
  const {setIsAuth} = useAuth()
  const navigate = useNavigate()

  return useMutation({
    mutationFn: AuthService.logout,
    mutationKey: ['logoutUser'],

    onSuccess: ()=> {
      setIsAuth(false)
      navigate('/login')
    }
  })
}