import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between px-10 py-6'>
        <h3 className='bg-black text-white px-12 py-2 rounded-full'>Target Audience</h3>
        <button className='bg-gray-200 text-white px-4 py-2 rounded-full'>Click here to get notified</button>
    </div>
  )
}

export default Navbar