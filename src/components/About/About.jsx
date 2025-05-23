import React from 'react'
import { BookOpen, GraduationCap, Rocket } from 'lucide-react'

const About = () => {
  return (
    <>
    <div name="About" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
      <h1 className='text-3xl font-bold mb-6 text-gray-800'>About</h1>
      <p className='text-gray-700 text-base leading-relaxed mb-10'>
        I'm Shaik Abdul Rahaman, an MCA postgraduate with strong knowledge in frontend development.
        I'm passionate about building clean, user-friendly interfaces and eager to grow in a dynamic environment.
      </p>

      {/* Education Section */}
      <h2 className='text-2xl font-semibold text-green-600 mb-6 flex items-center gap-2'>
        <GraduationCap className="w-6 h-6 text-green-500" />
        Education
      </h2>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div className='p-6 bg-gradient-to-r from-green-50 to-green-100 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-green-200 backdrop-blur-md'>
          <h3 className='text-lg font-semibold text-gray-800'>Aurora's PG College</h3>
          <p className='text-sm text-gray-600'>MCA (2022 – 2024)</p>
        </div>

        <div className='p-6 bg-gradient-to-r from-green-50 to-green-100 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-green-200 backdrop-blur-md'>
          <h3 className='text-lg font-semibold text-gray-800'>Bhavan's Vivekananda College</h3>
          <p className='text-sm text-gray-600'>B.Sc Computer Science (MPCs) (2018 – 2021)</p>
        </div>

        <div className='p-6 bg-gradient-to-r from-green-50 to-green-100 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-green-200 backdrop-blur-md'>
          <h3 className='text-lg font-semibold text-gray-800'>Narayana Jr College, Kuntloor</h3>
          <p className='text-sm text-gray-600'>Intermediate (MPC) (2016 – 2018)</p>
        </div>

        <div className='p-6 bg-gradient-to-r from-green-50 to-green-100 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-green-200 backdrop-blur-md'>
          <h3 className='text-lg font-semibold text-gray-800'>Kendriya Vidyalaya, Tirumalagiri</h3>
          <p className='text-sm text-gray-600'>
            10<sup>th</sup> (CBSE) (2015 – 2016)
          </p>
        </div>
      </div>

      {/* Skills Section */}
      <h2 className='text-2xl font-semibold text-green-600 mt-16 mb-6 flex items-center gap-2'>
        <Rocket className='w-6 h-6 text-green-500' />
        Skills
      </h2>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div className='p-6 bg-gradient-to-r from-green-50 to-green-100 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-green-200 backdrop-blur-md'>
          <h3 className='text-lg font-semibold text-gray-800'>Frontend Development</h3>
          <p className='text-sm text-gray-600'>HTML, CSS, JavaScript, Tailwind CSS, React </p>
        </div>

        <div className='p-6 bg-gradient-to-r from-green-50 to-green-100 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-green-200 backdrop-blur-md'>
          <h3 className='text-lg font-semibold text-gray-800'>Android Development</h3>
          <p className='text-sm text-gray-600'>Kotlin, Jetpack Compose, XML</p>
        </div>

                <div className='p-6 bg-gradient-to-r from-green-50 to-green-100 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-green-200 backdrop-blur-md'>
          <h3 className='text-lg font-semibold text-gray-800'>Designing</h3>
          <p className='text-sm text-gray-600'>Figma Tool</p>
        </div>

        
                <div className='p-6 bg-gradient-to-r from-green-50 to-green-100 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-green-200 backdrop-blur-md'>
          <h3 className='text-lg font-semibold text-gray-800'>Programing Languages</h3>
          <p className='text-sm text-gray-600'>Python, Kotlin, Javascript</p>
        </div>

                        <div className='p-6 bg-gradient-to-r from-green-50 to-green-100 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-green-200 backdrop-blur-md'>
          <h3 className='text-lg font-semibold text-gray-800'>Databases</h3>
          <p className='text-sm text-gray-600'>SQL </p>
        </div>
      </div>

            {/* Courses Section */}
      <h2 className='text-2xl font-semibold text-green-600 mt-16 mb-6 flex items-center gap-2'>
        <BookOpen className='w-6 h-6 text-green-500' />
        Courses
      </h2>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div className='p-6 bg-gradient-to-r from-green-50 to-green-100 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-green-200 backdrop-blur-md'>
          <h3 className='text-lg font-semibold text-gray-800'>Android Development</h3>
          <p className='text-sm text-gray-600'>I have trainned in android development from neat roots. </p>
        </div>


                <div className='p-6 bg-gradient-to-r from-green-50 to-green-100 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-green-200 backdrop-blur-md'>
          <h3 className='text-lg font-semibold text-gray-800'>Web Development</h3>
          <p className='text-sm text-gray-600'>I have trained in web development self.</p>
        </div>

        
                <div className='p-6 bg-gradient-to-r from-green-50 to-green-100 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-green-200 backdrop-blur-md'>
          <h3 className='text-lg font-semibold text-gray-800'>Python</h3>
          <p className='text-sm text-gray-600'>I have trained in python from udemy.</p>
        </div>

        
                <div className='p-6 bg-gradient-to-r from-green-50 to-green-100 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-green-200 backdrop-blur-md'>
          <h3 className='text-lg font-semibold text-gray-800'>Designing for web and mobile</h3>
          <p className='text-sm text-gray-600'>I have trained in designing self.</p>
        </div>

        
      </div>
    </div>
    <hr className=' text-gray-100' />
    </>
  )
}

export default About
