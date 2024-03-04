import { FC } from 'react';
import { Button, Form } from 'react-bootstrap';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { RegisterTypes } from '../core/types/userTypes';
import Notification from '../components/UI/Notification';
import { useRegister } from '../core/hooks/AuthorizationHooks';
import InputFieldForm from '../components/UI/InputFieldForm';
import { FaArrowLeft } from 'react-icons/fa';


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


  const { mutate, isSuccess, isError} = useRegister()

  const onSubmit:SubmitHandler<RegisterTypes> = (data) => {
    
    data.age = Number(data.age)
    mutate(data)
  }

  return (
  <>
    <h1 className='text-center'><Link to='/' className='text-decoration-none text-dark'>Registration ({<FaArrowLeft size={27}/>}back to Home)</Link></h1>
    {isSuccess && <Notification result='success'/>}
    {isError && <Notification result='danger'/>}
    <Form className='w-25 position-absolute top-50 start-50 translate-middle' onSubmit={handleSubmit(onSubmit)}>

      <InputFieldForm name={'firstName'} errorMessage={errors.firstName} 
      children={<Form.Control id='firstName' {...register('firstName', {required:true, pattern: /^[A-Za-z]+$/i})}></Form.Control>}/>

      <InputFieldForm name='secondName' errorMessage={errors.secondName}
        children = {<Form.Control id='secondName' {...register('secondName', {required: true, pattern: /^[A-Za-z]+$/i})}></Form.Control>}/>

      <InputFieldForm name='age'errorMessage={errors.age}
        children = {<Form.Control type="number" id='age' {...register('age', {required: true, min: 18, max: 99})}/>}/>

      <InputFieldForm name='email'errorMessage={errors.email}
        children = {<Form.Control type='email' id='email' autoComplete='username' {...register('email', {required: true})}/>}/>

      <InputFieldForm name='password'errorMessage={errors.password}
        children = {<Form.Control type='password' id='password' autoComplete='current-password' {...register('password', {required: true, minLength: 5})}/>}/>

      <InputFieldForm name='repeatPassword' errorMessage={errors.password}
        children = {<Form.Control type='password' id='repeatPassword' autoComplete='current-password' {...register('password', {required: true, minLength: 5})}/>}/>

      <Form.Group className='mt-4 d-flex f-row justify-content-around fs-3'>
        <Button type='submit' className='fs-3'>Sign up</Button> or <Link to='/login' className='text-decoration-none'>Login</Link>
      </Form.Group>
    </Form>
  </>
  );
};

export default Registration;