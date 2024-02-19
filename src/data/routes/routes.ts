import Home from "../../pages/Home";
import Login from "../../pages/Login";
import Registration from "../../pages/Registration";

export const ROUTES = [
  {
    path: '/',
    page: Home()
  },
  {
    path: '/login',
    page: Login()
  },
  {
    path: '/register',
    page: Registration()
  }
] 