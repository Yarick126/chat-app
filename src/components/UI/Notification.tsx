import { useState } from "react";
import { Alert } from "react-bootstrap";

const Notification = ({result}:{result:string}) => {
  const [show, setShow] = useState(false) 

  return <>
    <Alert variant={result} className=" d-flex f-row justify-content-around w-50 ms-4 fade show" onClose={()=> setShow(false)} dismissible>
      <Alert.Heading>{result==='success'? 'Вы успешно вошли!' : 'Ошибка входа!'}</Alert.Heading>
    </Alert>
  </>
};

export default Notification;