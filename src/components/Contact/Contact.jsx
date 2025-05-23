import React from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import toast from 'react-hot-toast';

const Contact = () => {
  const{
    register,
    handleSubmit,
    formState:{errors}
  }=useForm();
  const onSubmit=async(data) =>{
    const userInfo={
      name:data.name,
      email:data.email,
      message:data.message
    }
    try{
      await axios.post("https://getform.io/f/azynlypb",userInfo);
      toast.success("Your message has be sent")
    }
    catch(e){
      toast.error(e);
    }
  }
  return (
    <div name="Contact" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
    <h1 className='text-3xl font-bold mb-6 text-gray-800'>Contact Me</h1>  
    <span>Contact me filling the below form</span>  
    <div className='flex flex-col items-center mt-5 justify-center'>
      <form 
      onSubmit={handleSubmit(onSubmit)}
      // action="https://getform.io/f/azynlypb" 
      // method='POST' 
      className=' bg-slate-200 w-96 px-8 py-6 rounded-xl'>
              <h1 className='font-semibold text-xl mb-4'>Send Your Message</h1>
      <div className='flex flex-col mb-4'>
        <label className='block text-gray-700 '>Full Name</label>
        <input 
        className='shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline'
        type="text"
        {...register('name',{required:true})} 
        name='name'
        id='name'
        placeholder='Full Name'/>
        {errors.name && <span>This field is mandatory</span>}
      </div>

      <div className='flex flex-col mb-4'>
        <label className='block text-gray-700'>Email Address</label>
        <input 
        className='shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline'
        type="email"
        name='email'
        {...register("email",{required:true})}

        id='email'
        placeholder='Email Address' />
       {errors.email && <span>This field is mandatory</span>}

      </div>

      <div className='flex flex-col mb-4'>
        <label className='block text-gray-700'>Message</label>
        <textarea 
        className='shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 focus:outline_none focus:shadow-outline'
        name="message"
        id='message'
        {...register("message",{required:true})}
        placeholder='Enter Message here'></textarea>
        {errors.message && <span>This field is mandatory</span>}

      </div>
      <div>
        <button className='bg-black text-white rounded-xl py-2 px-3
        hover:bg-slate-700 duration-300'
        type='submit'>Connect</button>
      </div>
      </form>

    </div>
    </div>
  )
}

export default Contact
