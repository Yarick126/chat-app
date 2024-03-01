import { useMemo, useState } from "react"
import { LoginTypes } from "../types/login-types"

export const useForm = (callback: any, initialState:LoginTypes) => {
  const [userObject, setValueObject] = useState<LoginTypes>(initialState)


  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    setValueObject(
      { 
        ...userObject, 
        [e.target.name]: e.target.value
      })
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    await callback()
  }

  return useMemo(()=>({
    onChange,
    onSubmit,
    userObject
  }),[userObject])
}