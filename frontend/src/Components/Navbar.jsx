import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosSearch } from "react-icons/io";
import { CiCircleQuestion } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { RiGeminiFill } from "react-icons/ri";
import { IoApps } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className='flex items-center justify-between mx-3 h-16'>
        <div className='flex items-center gap-10'>
          <div className='flex items-center gap-2'>
            <div className='p-3 hover:bg-gray-200 rounded-full cursor-pointer'>
              <GiHamburgerMenu />
            </div>
            <img src="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png" alt="logo" className='w-10'/>
            <h1 className='text-2xl text-gray-500 font-medium'>Gmail</h1>
          </div>
        </div>
        <div className='w-[50%] mr-60 flex items-center gap-6'> 
          <div className='flex items-center bg-[#EAF1FB] px-2 py-3 rounded-full flex-grow w-[800] mt-4'>
            <IoIosSearch size={24} className='text-gray-500' />
            <input
              type="text"
              placeholder='Search mail'
              className='outline-none text-gray-500 rounded-full p-2 bg-transparent w-full'
            />
          </div>
          <div className='flex items-center mr-10'>
            <div className='p-3 hover:bg-gray-200 rounded-full cursor-pointer'>
              <CiCircleQuestion size={24}/>
            </div>
            <div className='p-3 hover:bg-gray-200 rounded-full cursor-pointer'>
              <IoSettingsOutline size={24}/>
            </div>
            <div className='p-3 hover:bg-gray-200 rounded-full cursor-pointer'>
              <RiGeminiFill size={24}/>
            </div>
            <div className='p-3 hover:bg-gray-200 rounded-full cursor-pointer'>
              <IoApps size={24}/>
            </div>
            <div className='p-3 hover:bg-gray-200 rounded-full cursor-pointer'>
              <img 
                src="https://ui-avatars.com/api/?name=Manish+Behera" 
                alt="profile" 
                className="w-8 h-8 rounded-full"
              />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar
