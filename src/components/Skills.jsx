import React from 'react'
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import FireBase from '../assets/firebase.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        {/* container */}
    <div className='max-w-[1000px] mx-auto p-4 h-full w-full flex flex-col justify-center'>
        <div>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
            <p className='py-4'>Following are the technologies that I've worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 text-center py-4'>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 m-5'>
                <img src={HTML} alt="HTML icon" className='w-20 mx-auto'/>
                <p className='my-4'>HTML</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 m-5'>
                <img src={CSS} alt="CSS icon" className='w-20 mx-auto'/>
                <p className='my-4'>CSS</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 m-5'>
                <img src={JavaScript} alt="JAVASCRIPT icon" className='w-20 mx-auto'/>
                <p className='my-4'>JAVASCRIPT</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 m-5'>
                <img src={ReactImg} alt="React icon" className='w-20 mx-auto'/>
                <p className='my-4'>REACT</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 m-5'>
                <img src={Tailwind} alt="Tailwind icon" className='w-20 mx-auto'/>
                <p className='my-4'>TAILWIND</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 m-5'>
                <img src={GitHub} alt="GitHub icon" className='w-20 mx-auto'/>
                <p className='my-4'>GITHUB</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Skills