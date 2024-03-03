import { useMemo, useState } from "react"
import { LoginTypes } from "../types/userTypes"

export const useForm = (callback: any) => {
  const [userObject, setValueObject] = useState<LoginTypes>({email: '', password: ''})


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