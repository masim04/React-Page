import React from 'react'
import RightCardContent from './RightCardContent'
const RightCard = (props) => {
  return (
    <div className='h-full shrink-0 w-60 overflow-hidden relative rounded-4xl'>
        <img className="w-full h-full object-cover" src={props.img}/>
        <RightCardContent id= {props.id} color={props.color} tag={props.tag} />
    </div>
  )
}

export default RightCard