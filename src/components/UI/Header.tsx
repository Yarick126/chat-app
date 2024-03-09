import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header({text}:{text: string}) {
  return (
    <div>
      <h1 className='text-center mt-4'>
        <Link to='/' className='text-decoration-none text-dark'>{text} ({<FaArrowLeft size={27}/>}back to Home)</Link>
      </h1>
    </div>
  );
}

export default Header;