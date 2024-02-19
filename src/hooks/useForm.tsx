import { useState } from "react"

export const useForm = (callback: any, initialState = {}) => {
  const [userObject, setValueObject] = useState<{} | null>()


  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    setValueObject({ ...userObject, [e.target.name]: e.target.value})
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    await callback()
  }

  return {
    onChange,
    onSubmit,
    userObject
  }
}