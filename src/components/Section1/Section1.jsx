import React from 'react'
import Navbar from './Navbar.jsx'
import Page1 from './Page1.jsx'
const Section1 = (props) => {
  return (
    <div className='bg-white text-black h-screen w-full'>
        <Navbar />
        <Page1 users={props.users} />
    </div>
  )
}

export default Section1