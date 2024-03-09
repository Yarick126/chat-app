import { IUser } from "../models/IUser";

class Store {

  user = {} as IUser
  isAuth = false

  constructor(){
    
  }

  setIsAuth(bool: boolean):void{
   this.isAuth = bool 
  }

  setUser(user: IUser): void {
    this.user = user
  }
}

export default Store