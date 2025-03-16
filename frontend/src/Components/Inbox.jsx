import React from 'react'
import { Link, Routes, Route, useLocation } from 'react-router-dom'
import { MdCropSquare } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdRestartAlt } from "react-icons/md";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { MdKeyboard } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineLaptop } from "react-icons/md";
import { FaTags } from "react-icons/fa";
import { MdOutlinePeopleOutline } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";

// Import mail components
import Primary from './mail/Primary'
import Promotions from './mail/Promotions'
import Social from './mail/Social'
import Updates from './mail/Updates'

const Inbox = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className='flex-1 bg-white rounded-xl mr-5'>
        <div className='flex justify-between items-center p-2 border-b'>
            <div className='flex items-center gap-4'>
                <div className='flex items-center'>
                    <MdCropSquare size={20} className='hover:bg-gray-200 cursor-pointer'/>
                    <IoMdArrowDropdown size={20} className='hover:bg-gray-200 cursor-pointer'/>
                </div>
                <div className='p-2 rounded-full hover:bg-gray-200 cursor-pointer'>
                    <MdRestartAlt size={20}/>
                </div>
                <div className='p-2 rounded-full hover:bg-gray-200 cursor-pointer'>
                    <HiOutlineDotsVertical size={20}/>
                </div>
            </div>

            <div className='flex items-center gap-3'>
                <span className='text-sm text-gray-600'>1 to 50</span>
                <MdOutlineKeyboardArrowLeft size={20} className='rounded-full hover:bg-gray-200 cursor-pointer'/>
                <MdOutlineKeyboardArrowRight size={20} className='rounded-full hover:bg-gray-200 cursor-pointer'/>
                <MdKeyboard size={20} className='rounded-full hover:bg-gray-200 cursor-pointer'/>
                <IoMdArrowDropdown size={20} className='hover:bg-gray-200 cursor-pointer'/>
            </div>
        </div>
        
        <div className='grid grid-cols-4 border-b'>
            <Link to="/inbox/primary" 
                  className={'flex items-center gap-2 py-3 px-4 hover:bg-gray-100 cursor-pointer ' + 
                           (currentPath === '/inbox/primary' ? 'border-b-2 border-blue-500' : '')}>
                <MdOutlineLaptop size={20} className='text-gray-600'/>
                <p className='text-sm font-medium'>Primary</p>
            </Link>

            <Link to="/inbox/promotions" 
                  className={'flex items-center gap-2 py-3 px-4 hover:bg-gray-100 cursor-pointer ' + 
                           (currentPath === '/inbox/promotions' ? 'border-b-2 border-blue-500' : '')}>
                <FaTags size={18} className='text-gray-600'/>
                <p className='text-sm font-medium'>Promotions</p>
            </Link>

            <Link to="/inbox/social" 
                  className={'flex items-center gap-2 py-3 px-4 hover:bg-gray-100 cursor-pointer ' + 
                           (currentPath === '/inbox/social' ? 'border-b-2 border-blue-500' : '')}>
                <MdOutlinePeopleOutline size={20} className='text-gray-600'/>
                <p className='text-sm font-medium'>Social</p>
            </Link>

            <Link to="/inbox/updates" 
                  className={'flex items-center gap-2 py-3 px-4 hover:bg-gray-100 cursor-pointer ' + 
                           (currentPath === '/inbox/updates' ? 'border-b-2 border-blue-500' : '')}>
                <IoNotifications size={20} className='text-gray-600'/>
                <p className='text-sm font-medium'>Updates</p>
            </Link>
        </div>

        <div className='mt-2'>
          <Routes>
            <Route path="primary" element={<Primary />} />
            <Route path="promotions" element={<Promotions />} />
            <Route path="social" element={<Social />} />
            <Route path="updates" element={<Updates />} />
          </Routes>
        </div>
      
    </div>
  )
}

export default Inbox
