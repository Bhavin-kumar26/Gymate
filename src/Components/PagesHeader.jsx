import React from 'react'

const PagesHeader = ({text}) => {
  return (
    <div className=' pg-header w-full h-[45vh] flex justify-center items-end pb-5'>
      <h1 className=' font-bold text-white text-[1.5rem]'>{text}</h1>
    </div>
  )
}

export default PagesHeader