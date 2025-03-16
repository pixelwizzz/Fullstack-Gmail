import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { LuPencil } from "react-icons/lu";
import { MdForwardToInbox } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { GoClock } from "react-icons/go";
import { IoMdSend } from "react-icons/io";
import { RiDraftFill } from "react-icons/ri";
import { MdExpandMore } from "react-icons/md";

const Sidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className='w-[15%]'>
      <div className='p-3'>
        <button className='flex items-center gap-2 bg-[#C2E7FF] p-4 rounded-2xl hover:shadow-md' >
          <LuPencil size={24}/>
          Compose
        </button>
      </div>

      <div className='text-gray-500'>
        <Link to="/inbox/primary" 
              className={'flex items-center pl-6 py-1 rounded-r-full gap-4 my-2 hover:cursor-pointer hover:bg-gray-200 ' + 
                        (currentPath.startsWith('/inbox') ? 'bg-[#D3E3FD] text-blue-600 font-medium' : '')}>
          <MdForwardToInbox size={20}/>
          <p>Inbox</p>
        </Link>

        <Link to="/starred" 
              className={'flex items-center pl-6 py-1 rounded-r-full gap-4 my-2 hover:cursor-pointer hover:bg-gray-200 ' + 
                        (currentPath === '/starred' ? 'bg-[#D3E3FD] text-blue-600 font-medium' : '')}>
          <FaRegStar size={20}/>
          <p>Starred</p>
        </Link>

        <Link to="/snoozed" 
              className={'flex items-center pl-6 py-1 rounded-r-full gap-4 my-2 hover:cursor-pointer hover:bg-gray-200 ' + 
                        (currentPath === '/snoozed' ? 'bg-[#D3E3FD] text-blue-600 font-medium' : '')}>
          <GoClock size={20}/>
          <p>Snoozed</p>
        </Link>

        <Link to="/sent" 
              className={'flex items-center pl-6 py-1 rounded-r-full gap-4 my-2 hover:cursor-pointer hover:bg-gray-200 ' + 
                        (currentPath === '/sent' ? 'bg-[#D3E3FD] text-blue-600 font-medium' : '')}>
          <IoMdSend size={20}/>
          <p>Sent</p>
        </Link>

        <Link to="/drafts" 
              className={'flex items-center pl-6 py-1 rounded-r-full gap-4 my-2 hover:cursor-pointer hover:bg-gray-200 ' + 
                        (currentPath === '/drafts' ? 'bg-[#D3E3FD] text-blue-600 font-medium' : '')}>
          <RiDraftFill size={20}/>
          <p>Drafts</p>
        </Link>

        <div className='flex items-center pl-6 py-1 rounded-r-full gap-4 my-2 hover:cursor-pointer hover:bg-gray-200'>
          <MdExpandMore size={20}/>
          <p>More</p>
        </div>
      </div>
    </div>
  )
}
 
export default Sidebar
