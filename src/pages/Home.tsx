import { FC } from 'react';
import { Link } from 'react-router-dom';

const  Home:FC = () => {
  return(
    <>
      <h1 className='text-center fs-1 mt-4'>Home</h1>
      <div className='fs-2 position-absolute top-50 start-50 translate-middle'>
        <span className='text-center'>Hello to Chat-App!</span><br />
        <Link to='/login' className = 'text-decoration-none'>Login</Link> or <Link to='/register' className='text-decoration-none'>Sign Up</Link>
      </div>
    </>
    
  )    
;
}

export default Home;