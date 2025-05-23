import React from 'react'
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillHtml5 } from "react-icons/ai";
import { RiCss3Fill } from "react-icons/ri";
import { RiJavascriptFill } from "react-icons/ri";
import { RiReactjsFill } from "react-icons/ri";
import { FaPython } from "react-icons/fa";
import { SiJetpackcompose } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import {ReactTyped} from 'react-typed'
import profile_pic from '../../assets/abdul_white.png';



const Home = () => {
  return (
    <>
    <div name="Home" className='max-w-screen-2xl container mx-auto px-4 md:px-20
    my-20'>
      <div className='flex flex-col md:flex-row'>
      <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
      <span className='text-xl'>Welcome to my portfolio</span>
      <div className='flex space-x-1 text-2xl md:text-4xl'>
         <h1>Hello I'm a </h1>
      <ReactTyped className='text-green-600 font-bold' strings={["Developer", "Designer", "Programmer"]} typeSpeed={100} showCursor={true} loop={true} />
      </div>
      <br />
      <p className='text-sm md:text-md text-justify'>I'm Shaik Abdul Rahaman, an MCA postgraduate with strong knowledge in frontend development.
        I'm passionate about building clean, user-friendly interfaces and eager to grow in a dynamic environment.</p>
      <br />
      {/* social media */}
      <div className='flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0 '>
      <div className='space-y-1'>
        <h1 className='font-semibold '>Connect Over</h1>
        <ul className='flex space-x-5 '>
          <li>
            <a href="https://www.linkedin.com/in/shaik-abdul-rahaman-76452b214/" target='_blank'>
            <AiFillLinkedin className='text-2xl cursor-pointer' /></a></li>
          <li>
            <a href="https://www.instagram.com/__abdul.rahaman/" target='_blank'>
            <AiFillInstagram className='text-2xl cursor-pointer' /></a></li>
          <li>
            <a href="https://github.com/AbdulRahamanskar" target='_blank'>
            <AiFillGithub className='text-2xl cursor-pointer' /></a></li>
        </ul>
      </div>
      <div className='space-y-2'>
        <h1 className='font-semibold'>Currently Working on</h1>

        <ul className='flex space-x-5 flex-wrap'>
          <li><AiFillHtml5 className='text-2xl 
          md:text-3xl hover:scale-105 duration-200 rounded-full border-[2px] cursor-pointer'/></li>
          <li><RiCss3Fill className='text-2xl
          md:text-3xl hover:scale-105 duration-200 rounded-full border-[2px] cursor-pointer'/></li>
          <li><RiJavascriptFill className='text-2xl
          md:text-3xl hover:scale-105 duration-200 rounded-full border-[2px] cursor-pointer' /></li>
          <li><RiReactjsFill className='text-2xl
          md:text-3xl hover:scale-105 duration-200 rounded-full border-[2px] cursor-pointer' /></li>
          {/* <li><FaPython className='text-2xl
          md:text-3xl hover:scale-105 duration-200 rounded-full border-[2px] cursor-pointer' /></li>
          <li><SiJetpackcompose className='text-2xl
          md:text-3xl hover:scale-105 duration-200 rounded-full border-[2px] cursor-pointer' /></li>
          <li><RiTailwindCssFill className='text-2xl
          md:text-3xl hover:scale-105 duration-200 rounded-full border-[2px] cursor-pointer'/></li> */}

        </ul>


      </div>
      </div>
      </div>
      <div className='md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1'>
      <img className='rounded-full md:w-[450px] md:h-[450px]' src={profile_pic} alt="profile Pic Right" />
      </div>
      </div>
    </div>
    <hr className=' text-gray-100' />
    </>
  )
}

export default Home;
