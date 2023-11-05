import React, { useEffect, useState } from 'react'
import Menu from './Reusable/Menu'
import Statuslist from './Reusable/Statuslist'
import Createpost from './Reusable/Createpost'
import Post from './Reusable/Post'
import db from '../Firebase/Index'
import { getDocs, collection } from 'firebase/firestore'
import Header from './Header'
import Header1 from './Header1'

export default function Content() {

  const [posts, setPosts] = useState([])

  const fetchPosts = async () =>{
    const querySnapshot = await getDocs(collection(db, "posts"))
    let temp =[]
    querySnapshot.forEach((doc) => {
      temp.push({id: doc.id, ...doc.data()})
    })

    temp = temp.sort(function(x,y){
      return y.timestamp - x.timestamp
    })

    setPosts(temp);
  }

  useEffect(() => {
    fetchPosts()

  },[])
  return (
    <div>
            <Header1 />

    <div className='classes pt-4 ms-3'>
        <Menu className='classes1'/>
        <div className='p-20'>
            <Statuslist />
            <Createpost fetchPosts={fetchPosts}/>
            {
              posts.map((post) => <Post {...post} />)
            }
            {/* <Post message="hi" profilePic="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" name="vincy" date="24/05/2020"/> */}
        
        </div>
    </div>
    </div>
  )
}
