import Home from "../../pages/Home.tsx";
import Login from "../../pages/Login.tsx";
import Registration from "../../pages/Registration.tsx";

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