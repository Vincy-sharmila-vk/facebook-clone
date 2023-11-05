import React from 'react'
import Status from './Status'
import { ImageList } from '../../Utils/Index'
import Group from './Group'

export default function Statuslist() {
  return (
    <div className='content-status'>
     <Status imgurl ={ImageList[0].download_url}
     profileurl ="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
     name ="vincy" />
     <Status imgurl ={ImageList[1].download_url}
     profileurl ="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
     name ="Jani" />
     <Status imgurl ={ImageList[2].download_url}
     profileurl ="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
     name ="Jhon" />
     <Status imgurl ={ImageList[3].download_url}
     profileurl ="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
     name ="Jack" />
      <Group />
     
    </div>
  )
}
