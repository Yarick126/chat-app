import {Button, Form} from 'react-bootstrap'
import { Link } from 'react-router-dom/dist';
import { useForm } from '../core/hooks/useForm';
import { FC } from 'react';
import { useMutation } from '@tanstack/react-query';
import { loginUser } from '../core/api';
import Notification from '../components/UI/Notification';

const initialState = {
  email: '',
  password: ''
}

const Login :FC = ()=>{

  const {mutate, data, isSuccess, isError} = useMutation({
    mutationFn: loginUser,
    mutationKey: ['loginUser']
  })

  const {onChange, onSubmit, userObject } = useForm(loginUserCallback, initialState)

  async function loginUserCallback() {

    if(!userObject.email.includes('@')){
      console.log('Required @!');
      return
    }
    if(userObject.password.length <= 4){
      console.log('Tooo short!');
      return
    }
    await mutate(userObject)
    
  }

  return (
  <>
    <h1 className='text-center'><Link to='/' className='text-decoration-none text-dark'>Login</Link></h1>
    {isSuccess && <Notification result='success'/>}
    {isError && <Notification result='danger'/>}
    <Form className='w-25 position-absolute top-50 start-50 translate-middle' onSubmit={onSubmit}>
      <Form.Group>
        <Form.Label htmlFor='email'>Email</Form.Label>
        <Form.Control id='email' type='email' name='email' onChange={onChange}></Form.Control>
      </Form.Group>

      <Form.Group>
        <Form.Label htmlFor='password'>Password</Form.Label>
        <Form.Control id='password' type='password' name='password' onChange={onChange}></Form.Control>
      </Form.Group>

      <Form.Group className='mt-4 d-flex f-row justify-content-around fs-2'>
        <Button type='submit' className='fs-2'>Login</Button> or <Link to='/register' className='text-decoration-none'>Sign Up</Link>
      </Form.Group>
    </Form>
  </>
    
  );
}

export default Login