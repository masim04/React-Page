import React from 'react'
import RightCard from './RightCard.jsx'
const Right = (props) => {
  return (
    <div id='right' className='h-full rounded-4xl flex gap-6 flex-nowrap overflow-x-auto p-6 w-3/4'>
        {props.users.map(function(elem, idx){
        return <RightCard key={idx} color={elem.color} id={idx} img={elem.img} tag={elem.tag} />
        })}
    </div>
  )
}

export default Right