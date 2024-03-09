import axios, { AxiosResponse } from "axios"
import { API_URL } from "../constants/constants"
import { UserData } from "../types/userTypes"

class UserServices {

  static getAllUsers = async():Promise<AxiosResponse<UserData[]>> => {
    return await axios.get<UserData[]>(API_URL + '/chat')
  }

}

export default UserServices