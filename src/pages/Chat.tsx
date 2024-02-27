import { FC } from "react";
import { Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

const Chat: FC = () => {
  return (
    <>
      <h1 className='text-center'><Link to='/' className='text-decoration-none text-dark'>Chat</Link></h1>
      <div className="container-lg">
        <Stack gap={3} className="border border-1 p-4">
          <div>Mary</div>
          <div>Ory</div>
          <div>Dury</div>
        </Stack>
      </div>
    </>

  );
};

export default Chat;