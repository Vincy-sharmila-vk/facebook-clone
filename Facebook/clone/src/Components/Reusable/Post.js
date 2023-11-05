import React from 'react'
import { ChatLeftFill, HandThumbsUpFill, ShareFill } from 'react-bootstrap-icons'

export default function Post(props) {
  return (
    <div className='create-post background-white br-10 mb-4 px-4'>
        <div className='d-flex'>
            <img src={props.profilePic}
            alt='profile-logo'
            width={45}
            height={50}
            className='me-2 br-30' style={{borderRadius: "50%"}} />
            <div>
                <div>
                    {props.username}
                </div>
                <div>{new Date (props.timestamp?.toDate()).toLocaleString()}</div>
               
            </div>
        </div>
        <p className='ps-3 pt-4'>{props.message}</p>
        {
            props.image && (
                <img src={props.image}
                alt='profile'
                width={"100%"}
                height={500}
                className='px-2 br-20' />
            )
        }
        <div className='d-flex pr-4 color-gray justify-content-evenly'>
            <div className='d-flex align-items-center'>
                <HandThumbsUpFill className='me-2' />
                Like
            </div>
            <div className='d-flex align-items-center'>
                <ChatLeftFill className='me-2' />
                Comment
            </div>
            <div className='d-flex align-items-center'>
                <ShareFill className='me-2' />
                Share
            </div>
        </div>
    </div>
  )
}
