import React from 'react'

const button = ({title}) => {
  return (
    <div>
      <button className="absolute  text-6xl top-[4.75rem] left-[104.06rem] w-[16.25rem] h-[5.5rem]  bg-white hover:bg-black text-black-700 font-semibold hover:text-white border border-black-500 hover:border-black rounded cursor-pointer ">{title}</button> 
        
    </div>
  )
}

export default button
