import {Button, Form} from 'react-bootstrap'
import { Link } from 'react-router-dom/dist';
import { useForm } from '../hooks/useForm';

const Login = ()=>{

  const initialState = {
    email: '',
    password: ''
  }

  const {onChange, onSubmit, userObject } = useForm(loginUserCallback, initialState)

  async function loginUserCallback() {
    console.log(userObject);
  }

  return (
  <>
    <h1 className='text-center'>Login</h1>
    <Form className='w-25 position-absolute top-50 start-50 translate-middle' onSubmit={onSubmit}>

      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control name='email' onChange={onChange}></Form.Control>
      </Form.Group>

      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control name='password'></Form.Control>
      </Form.Group>

      <Form.Group className='mt-4'>
        <Button type='submit'>Login</Button> or <Link to='/register'>Sign Up</Link>
      </Form.Group>
    </Form>
  </>
    
  );
}

export default Login;