import React from 'react'
import {FaLinkedin } from 'react-icons/fa'
import { IoLogoGithub } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io5";
import { SiGmail } from "react-icons/si";



const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
    <hr className=' text-gray-100'/>
    <footer className='py-12'>
      <div className='max-w-screen-2xl container mx-auto px-4 md:px-20'>
        <div className='flex flex-col items-center justify-center'>
          <div className='flex space-x-4'>
            <a href="https://www.linkedin.com/in/shaik-abdul-rahaman-76452b214/" target='_blank'>
            <FaLinkedin className='size-[24px] cursor-pointer transition hover:scale-110 duration-300'/>
            </a>
            <a href="https://github.com/AbdulRahamanskar" target='_blank'>
            <IoLogoGithub className='size-[24px] cursor-pointer transition hover:scale-110 duration-300'/>
            </a>
            <a href="https://www.instagram.com/__abdul.rahaman/" target='_blank'>
              <IoLogoInstagram className='size-[24px] cursor-pointer transition hover:scale-110 duration-300'/>
            </a>
            <a href="mailto:abdulrahaman.7779@gmail.com">
              <SiGmail className='size-[24px] cursor-pointer transition hover:scale-110 duration-300'/>
            </a>
          </div>
          <div className='mt-8 border-t border-gray-700 pt-8 flex flex-col items-center'>
            <p className='text-sm'>
              &copy; {year} Shaik Abdul Rahaman. All Rights Reserved.
            </p>
          </div>
        </div>

      </div>

    </footer>
    </>
  )
}

export default Footer;
