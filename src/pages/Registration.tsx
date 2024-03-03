import { FC } from 'react';
import { Button, Form } from 'react-bootstrap';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { RegisterTypes } from '../core/types/userTypes';
import { useMutation } from '@tanstack/react-query';
import { registerUser } from '../core/api';
import Notification from '../components/UI/Notification';

const Registration:FC = () => {

  const {
    register, 
    handleSubmit, 
    formState: {
      errors
    }} = useForm<RegisterTypes>({
      defaultValues: {
        firstName: '',
        secondName: '',
        age: 0,
        email: '',
        password: ''
      }
    })


  const { mutate, isSuccess, isError} = useMutation({
    mutationFn: registerUser,
    mutationKey: ['registerUser']
  })

  const onSubmit:SubmitHandler<RegisterTypes> = (data) => {
    
    data.age = Number(data.age)
    mutate(data)
  }

  return (
  <>
    <h1 className='text-center'><Link to='/' className='text-decoration-none text-dark'>Registration</Link></h1>
    {isSuccess && <Notification result='success'/>}
    {isError && <Notification result='danger'/>}
    <Form className='w-25 position-absolute top-50 start-50 translate-middle text-primary' onSubmit={handleSubmit(onSubmit)}>
      <Form.Group >
        <Form.Label htmlFor='firstName'>First Name</Form.Label>
        <Form.Control id='firstName' {...register('firstName', {required:true, pattern: /^[A-Za-z]+$/i})}></Form.Control>
        {errors.firstName && <Form.Text className='text-danger'>This field is required!</Form.Text>}
      </Form.Group>

      <Form.Group>
        <Form.Label htmlFor='secondName'>Second Name</Form.Label>
        <Form.Control id='secondName' {...register('secondName', {required: true, pattern: /^[A-Za-z]+$/i})}></Form.Control>
        {errors.secondName && <Form.Text className='text-danger'>This field is required!</Form.Text>}
      </Form.Group>

      <Form.Group className='w-25'>
        <Form.Label htmlFor='age'>Age</Form.Label>
        <Form.Control type="number" id='age' {...register('age', {required: true, min: 18, max: 99})}></Form.Control>
        {errors.age && <Form.Text className='text-danger'>This field is required!</Form.Text>}
      </Form.Group>

      <Form.Group>
        <Form.Label htmlFor='email'>Email</Form.Label>
        <Form.Control type='email' id='email' {...register('email', {required: true})}></Form.Control>
        {errors.email && <Form.Text className='text-danger'>This field is required!</Form.Text>}
      </Form.Group>

      <Form.Group>
        <Form.Label htmlFor='password'>Password</Form.Label>
        <Form.Control type='password' id='password' {...register('password', {required: true, minLength: 5})}></Form.Control>
        {errors.password && <Form.Text className='text-danger'>This field is required!</Form.Text>}
      </Form.Group>

      <Form.Group>
        <Form.Label htmlFor='repeatPassword'>Repeat password</Form.Label>
        <Form.Control type='password' id='repeatPassword' {...register('password', {required: true, minLength: 5})}></Form.Control>
        {errors.password && <Form.Text className='text-danger'>This field is required!</Form.Text>}
      </Form.Group>

      <Form.Group className='mt-4 d-flex f-row justify-content-around fs-2'>
        <Button type='submit' className='fs-2'>Sign up</Button> or <Link to='/login' className='text-decoration-none'>Login</Link>
      </Form.Group>
    </Form>
  </>
  );
};

export default Registration;