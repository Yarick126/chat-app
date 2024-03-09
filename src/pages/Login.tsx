import {Button, Form} from 'react-bootstrap'
import { Link } from 'react-router-dom/dist';
import { useForm } from '../core/hooks/useForm';
import { FC } from 'react';
import Notification from '../components/UI/Notification';
import { useLoginUser } from '../core/hooks/AuthorizationHooks';
import Header from '../components/UI/Header';



const Login :FC = ()=>{

  const {mutate, isSuccess, isError} = useLoginUser()
  const {onChange, onSubmit, userObject} = useForm(loginUserCallback)


  async function loginUserCallback() {
    await mutate(userObject)
  }

  return (
  <>
    <Header text='Login'/>

    {isSuccess && <Notification result='success'/>}
    {isError && <Notification result='danger'/>}
    
    <Form className='w-25 position-absolute top-50 start-50 translate-middle' onSubmit={onSubmit}>
      <Form.Group>
        <Form.Label htmlFor='email'>Email</Form.Label>
        <Form.Control id='email' type='email' name='email' autoComplete='username' onChange={onChange}></Form.Control>
      </Form.Group>

      <Form.Group>
        <Form.Label htmlFor='password'>Password</Form.Label>
        <Form.Control id='password' type='password' name='password' autoComplete='current-password' onChange={onChange}></Form.Control>
      </Form.Group>

      <Form.Group className='mt-4 d-flex f-row justify-content-around fs-4'>
        <Button type='submit' className='fs-4'>Login</Button> or <Link to='/register' className='text-decoration-none'>Sign Up</Link>
      </Form.Group>
    </Form>
  </>
    
  );
}

export default Login