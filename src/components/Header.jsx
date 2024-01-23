import React from 'react'
import { Link } from 'react-scroll'
import { IoHomeOutline } from 'react-icons/io5'
import { FaRegUser } from 'react-icons/fa'
import { MdOutlineMail } from 'react-icons/md'
import { BiCommentDetail } from 'react-icons/bi'
import { MdOutlineWorkOutline } from 'react-icons/md'


const Header = () => {
  const logo = require("../assets/logo.png")
  return (
    <div className='mt-6 min-w-max bg-bgcolor/10'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <a href='#'>
            <img className="w-60" src={logo} alt='logo' /> 
            {/* Jyothika Manoj */}
          </a>
          
      <nav className="items-center j-full">
      <div className="container mx-auto">
        <div className="text-xl flex items-center justify-between gap-x-14">
          <Link
            activeClass="active"
            smooth={true}
            // to enable active class on scroll
            // spy={true} 
            to="home"
            className="flex items-center justify-center w-[60px] h-[60px] rounded-full"
          >
            Home
          </Link>
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            to="about"
            className="flex items-center justify-center w-[60px] h-[60px] rounded-full"
          >
            About
          </Link>
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            to="skills"
            className="flex items-center justify-center w-[60px] h-[60px] rounded-full"
          >
            Skills
          </Link>
          <Link
            activeClass="active"
            smooth={true}
            // spy={true}
            to="project"
            className="flex items-center justify-center w-[60px] h-[60px]  rounded-full"
          >
            Projects
          </Link>
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            to="contact"
            className="flex items-center justify-center w-[60px] h-[60px]  rounded-full"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>

        </div>
      </div>
    </div>
  )
}

export default Header