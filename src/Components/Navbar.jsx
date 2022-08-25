import React from 'react'
import {Link} from 'react-router-dom';
import Search from './Search';
import logo from '../images/google-logo.png';
const Navbar = () => {
  return (
    <div className='p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b border-gray-200 '>
        <div className="flex justify-between items-center space-x-5 w-screen">
            <Link to='/'>
                <img src={logo} alt={logo} />
            </Link>
            <button type="button" className="text-xl dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full px-2 py-1 hover:shadow-lg">
              <a href='https://www.linkedin.com/in/hossam-eldin-ashraf-37253221b/' target='_blank' rel="noreferrer" >Portfolio</a>
            </button>
        </div>
        <Search />
    </div>
  )
}

export default Navbar;