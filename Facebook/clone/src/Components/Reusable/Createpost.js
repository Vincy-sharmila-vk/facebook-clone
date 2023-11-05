import { Timestamp, addDoc, collection } from 'firebase/firestore'
import React, { useState } from 'react'
import { CameraFill, EmojiSmile, Images, PersonCircle } from 'react-bootstrap-icons'
import db from '../../Firebase/Index'
import { useSelector } from 'react-redux'
import Group from './Group'

export default function Createpost(props) {

  const user = useSelector((state) => state.user.value)


  const [message, setMessage] = useState("");
  const [image, setImage] = useState("");


  const handleSubmit = () => {
    addDoc(collection(db, "posts"),{
      message,
      username: user.displayName,
      image,
      timestamp: Timestamp.fromDate(new Date()),
      profilePic : user.photoUrl 

    }).then(() =>{
      props.fetchPosts()
      setImage("")
      setMessage("")
    })
  }



  return (
    <div className='create-post1 background-white br-10'>
        <div className='d-flex align-items-center mx-3'>
        <PersonCircle className='fs-1 pe-2' />
        <input type='search' className='search-box' style={{flex: 1}} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="whay's on your mind?" />
        <input type='search' className='search-box' placeholder="img-url" value={image} onChange={(e) => setImage(e.target.value)} />
        <button className='btn btn-success br-20 ms-3' onClick={handleSubmit}>Post</button>
        </div>
       <div className='d-flex pt-5 pb-1 justify-content-evenly'>
        <div className='d-flex post-icon align-items-center'>
            <CameraFill color='red' className='m-2 fs-3' />Live Video
        </div>
        <div className='d-flex post-icon align-items-center'>
            <Images color='green' className='m-2 fs-3' />Photo/Video
        </div>
        <div className='d-flex post-icon align-items-center'>
            <EmojiSmile className='text-warning m-2 fs-3' />Feeling activity
        </div>
       </div>
       
    </div>
  )
}
