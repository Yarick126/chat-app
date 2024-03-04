import {Button, Form} from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom/dist';
import { useForm } from '../core/hooks/useForm';
import { FC } from 'react';
import Notification from '../components/UI/Notification';
import { FaArrowLeft } from "react-icons/fa";
import { useLoginUser } from '../core/hooks/AuthorizationHooks';


const Login :FC = ()=>{

  const navigate = useNavigate()
  const {mutate, isSuccess, isError,data} = useLoginUser()
  const {onChange, onSubmit, userObject} = useForm(loginUserCallback)

  async function loginUserCallback() {
    
    await mutate(userObject)

  }

  return (
  <>
    <h1 className='text-center'><Link to='/' className='text-decoration-none text-dark'>Login ({<FaArrowLeft size={27}/>}back to Home)</Link></h1>
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