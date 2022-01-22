import React from 'react'

function StoryCard({ name, src, detail, tech, link }) {
    return (
        <div className='w-full px-5 lg:px-0 flex bg-gray-100 shadow-lg mt-28 rounded-lg'>
            <img 
            className="object-cover w-[400px] h-auto rounded-l-lg"
            src={src}
            layout="fill"
            alt='ImageP'
            />
            <div className='pl-10'>
            <p className='w-5/6 text-black text-xl font-bold font-serif'>{name}</p>
            <p className='text-lg font-medium'>{tech}</p>
            <p className='pb-5 text-gray-600'>{detail}</p>
            <a href={link} target="_blank" className='bg-gray-300 px-4 py-2 rounded-md hover:text-white cursor-pointer hover:bg-gray-900 transition-colors duration-500'>Live Link</a>
            </div>

        </div>
    )
}

export default StoryCard
