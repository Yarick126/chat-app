import {  ReactNode, createContext, useState} from "react";
import { IIsAuth } from "../core/types/IIsAuth";
import Cookies from "js-cookie";
import { TOKEN } from "../core/constants/constants";


export const AuthContext = createContext<IIsAuth>({isAuth: false, setIsAuth: ()=>{}})

const AuthProvider = ({children}:{children: ReactNode}) => {
  
  const [isAuth, setIsAuth] = useState(!!Cookies.get(TOKEN))

  return <AuthContext.Provider value ={{isAuth, setIsAuth}}>
    {children}
  </AuthContext.Provider>
}

export default AuthProvider