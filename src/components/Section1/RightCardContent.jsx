import React from 'react'

const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-between p-8'>
            <h2 className='bg-white  font-semibold h-10 w-10 rounded-full flex justify-center items-center'>{props.id+1}</h2>
            <div>
            <p className='text-lg text-white leading-relaxed mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita similique officiis deleniti.</p>
           <div className='flex justify-between'>
            <button style={{backgroundColor:props.color }} className=' text-white px-8 py-3 font-medium rounded-full'>{props.tag}</button>
            <button style={{backgroundColor:props.color }} className=' text-white px-4 py-2 font-medium rounded-full'><i className="ri-arrow-right-long-fill"></i></button>
           </div>
            </div>
        </div>
  )
}

export default RightCardContent