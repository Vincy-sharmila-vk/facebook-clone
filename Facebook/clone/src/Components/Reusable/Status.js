import React from 'react'

export default function Status(props) {
  return (
    <div className='status1'>
        <img src={props.imgurl} width={200} height={250} className='br-20' alt='status-background' />
        <img src={props.profileurl} width={45} height={45} alt='status-profile' className='status-profile' />
        <div className='name'>
            <b>{props.name}</b>

        </div>
        
    </div>
  )
}
