import React from 'react'

function Projects({ name, src, detail, tech, link }) {
    return (
        <div className='w-full lg:px-0 flex flex-col md:flex-row bg-gray-100 shadow-lg mt-28 rounded-lg hover:scale-105 translate transform duration-200'>
            <img 
            className="object-cover w-[400px] h-auto rounded-t-lg md:rounded-l-lg"
            src={src}
            layout="fill"
            alt='ImageP'
            />
            <div className='pl-10'>
            <p className='md:w-5/6 text-black text-xl font-bold font-serif pt-2'>{name}</p>
            <p className='text-lg font-medium'>{tech}</p>
            <p className='pb-5 text-gray-600'>{detail}</p>
            <div className='pb-5'>
            <a href={link} target="_blank" className='bg-gray-300 px-4 py-2 rounded-md hover:text-white cursor-pointer hover:bg-gray-900 transition-colors duration-500'>Live Link</a>
           
            </div>
             </div>

        </div>
    )
}

export default Projects
