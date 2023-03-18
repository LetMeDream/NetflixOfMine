import React from 'react'
import { FiSearch, FiUser } from 'react-icons/fi'
import { IoNotificationsOutline } from 'react-icons/io5'
import { BiDownArrow } from 'react-icons/bi'

const Navbar = () => {
  const styles = {
    navlinks: 'cursor-pointer caret-transparent text-white hover:text-[#E50914]'
  }

  return (
    <nav className='nav absolute z-10 backdrop-blur-sm w-full p-4 flex justify-between items-center bg-gradient-to-b from-[rgb(55,65,81,.5)] to-[rgb(209,213,219,.5)] min-w-max'>
      <div className='navigation flex gap-2 items-center '>
        <div className='logo mx-3 text-xl font-montserrat font-medium text-[#E50914] cursor-pointer caret-transparent'>
          Netflix
        </div>
        <ul className='links hidden md:flex gap-4'>
          <li className={styles.navlinks}>Home</li>
          <li className={styles.navlinks}>TV Shows</li>
          <li className={styles.navlinks}>Movies</li>
          <li className={styles.navlinks}>New & Popular</li>
          <li className={styles.navlinks}>My List</li>
          <li className={styles.navlinks}>Browse by language</li>
        </ul>
      </div>
      <div className='user-settings'>
        <ul className='flex items-center gap-4'>
          <li className={styles.navlinks}>
            <FiSearch className='text-xl' />
          </li>
          <li className={styles.navlinks}>DVD</li>
          <li className={styles.navlinks}>
            <IoNotificationsOutline className='text-xl' />
          </li>
          <li className={styles.navlinks + ' flex'}>
            <div className='text-xl'>
              <FiUser />
            </div>
            <div className='text-xl'>
              <BiDownArrow />
            </div>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
