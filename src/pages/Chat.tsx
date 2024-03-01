import { FC } from "react";
import { Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../core/hooks/useAuth";

const Chat: FC = () => {

  const {isAuth} = useAuth()

  return (
    <>
      <h1 className='text-center'><Link to='/' className='text-decoration-none text-dark'>Chat</Link></h1>
      {console.log(isAuth)}
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