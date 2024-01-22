import React, { useState } from 'react'
import Sidebar from '../../component/sidebar/Sidebar'
import { CiMenuBurger } from "react-icons/ci";
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleToggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className='md:flex md:flex-row md:py-4'>
      { window.innerWidth < 768 ? (
        <div className=' h-12 bg-VividRed'>

        <div class='w-8 pt-2 m-auto'>
          <Link to='/'>
            <img src='/assets/logoBC.svg' alt='Logo'/>
          </Link>
        </div>

          <div className='group absolute left-0 -mt-5 text-xs w-[60px]' >
            <button onClick={handleToggleDropdown} className='font-poppins focus:outline-none'>
              <CiMenuBurger className='ml-5 text-white'/>
            </button>
            <div className={`${isDropdownOpen ? 'block' : 'hidden'}`}>
              <Sidebar/>
            </div>
          </div>
        </div>
        ) : (
          <div className='basis-2/5 px-6 lg:basis-1/2'>
            <Sidebar/>
          </div>
        )}
      <div className='basis-3/5 px-3 lg:basis-3/4'>
          sss
      </div>
    </div>
  )
}
