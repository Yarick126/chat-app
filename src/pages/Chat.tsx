import { FC } from "react";
import { Stack } from "react-bootstrap";
import { useAuth } from "../core/hooks/useAuth";
import Header from "../components/UI/Header";
import Cookies from "js-cookie";
import { TOKEN } from "../core/constants/constants";

const Chat: FC = () => {

  const {isAuth, setIsAuth} = useAuth()

  return (
    <>
      <Header text='Chat'/>
      <button onClick={(e)=> {
        e.preventDefault()
        console.log(Cookies.get(TOKEN));
        }}>Click ME!</button>
      {
        isAuth &&
        <div className="container-lg">
          <Stack gap={3} className="border border-1 p-4">
            <div>Mary</div>
            <div>Ory</div>
            <div>Dury</div>
          </Stack>
        </div>
      }
      
    </>

  );
};

export default Chat;