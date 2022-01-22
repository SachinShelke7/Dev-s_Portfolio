import React from 'react'

function StoryCard({ name, src, detail }) {
    return (
        <div className='w-full px-5 lg:px-0 pt-28 flex'>
            <img 
            className="object-cover w-[400px] h-auto"
            src={src}
            layout="fill"
            alt='ImageP'
            />
            <div className='pl-10'>
            <p className='w-5/6 text-black text-sm font-bold'>{name}</p>
            <p>{detail}</p>
            </div>

        </div>
    )
}

export default StoryCard
