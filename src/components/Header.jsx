import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineMenu } from 'react-icons/ai'
import { GiTireIronCross } from 'react-icons/gi'

const Header = () => {
  const [menu, setMenu] = useState(false)

  const menus = (
    <>
      <li className='hover:cursor-pointer hover:bg-gray-800 hover:rounded-md px-6 md:px-1 py-2'>
        <Link to='/'>Home</Link>
      </li>
      <li className='hover:cursor-pointer hover:bg-gray-800 hover:rounded-md px-6 md:px-1 py-2'>
        <Link to='/completedtasks'>Completed Tasks</Link>
      </li>
      <li className='hover:cursor-pointer hover:bg-gray-800 hover:rounded-md px-6 md:px-1 py-2'>
        <Link to='/todo'>To-Do</Link>
      </li>
      <li className='hover:cursor-pointer hover:bg-gray-800 hover:rounded-md px-6 md:px-1 py-2'>
        <Link to='/calender'>Calendar</Link>
      </li>
    </>
  )
  return (
    <header className='text-[#EEEEEE] sticky top-0 w-full z-50'>
      <nav className='uppercase bg-[#041C32] flex justify-around md:justify-evenly items-center py-2 md:py-3 relative'>
        <h1 className='text-2xl md:text-3xl font-extralight tracking-widest'>
          Tasker
        </h1>
        <button
          onClick={() => setMenu(!menu)}
          className='cursor-pointer md:hidden'
        >
          {menu ? (
            <GiTireIronCross className='text-xl'></GiTireIronCross>
          ) : (
            <AiOutlineMenu className='text-2xl'></AiOutlineMenu>
          )}
        </button>

        <ul className='hidden md:flex  gap-5 items-center text-center tracking-wide'>
          {menus}
        </ul>
      </nav>
      <ul
        className={
          //   menu
          //     ? 'md:hidden w-full fixed left-0 top-12 bg-[#041C32] ease-in duration-300 px-4 pt-3 pb-5 text-lg'
          //     : 'w-full fixed top-[-100%] ease-in duration-300'

          menu
            ? 'md:hidden text-base uppercase px-4 absolute pt-3 pb-5 text-center bg-gray-800 w-5/6 rounded-b-lg left-0 right-0 mx-auto'
            : 'hidden'
        }
      >
        {menus}
      </ul>
    </header>
  )
}

export default Header
