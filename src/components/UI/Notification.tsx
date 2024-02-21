import { Alert } from "react-bootstrap";

const Notification = ({result}:{result:string}) => {
  return <>
    <Alert variant={result}>
      <Alert.Heading>{result==='success'? 'Вы успешно вошли!' : 'Ошибка входа!'}</Alert.Heading>
    </Alert>
  </>
};

export default Notification;