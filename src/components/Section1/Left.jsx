import React from 'react'
import 'remixicon/fonts/remixicon.css'
import Arrow from './Arrow.jsx'
import HeroText from './HeroText'
const Left = () => {
  return (
    <div className='h-full w-1/3 flex flex-col justify-between'>
      <HeroText />
     <Arrow />
    </div>
  )
}

export default Left