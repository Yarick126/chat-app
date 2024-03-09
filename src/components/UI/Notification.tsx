import { useState } from "react";
import { Alert } from "react-bootstrap";

const Notification = ({result}:{result:string}) => {
  const [show, setShow] = useState(false) 

  return <>
    <Alert variant={result} className="position-absolute top-0 start-0 d-flex f-row justify-content-around w-25 mt-4 ms-4 fade show" onClose={()=> setShow(false)} dismissible>
      <Alert.Heading>{result==='success'? 'Вы успешно вошли!' : 'Ошибка входа!'}</Alert.Heading>
    </Alert>
  </>
};

export default Notification;