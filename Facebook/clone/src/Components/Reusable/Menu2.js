import React from 'react'
import { Disc, Display, File, Gift, Paperclip, People, PeopleFill, PersonLinesFill, PersonPlus, Plus } from 'react-bootstrap-icons'

export default function Menu2() {
  return (
    <div className='content-left mb-20 daa'>
            <div className='d-flex align-items-center' style={{width:'300px'}}>
            </div>
            
                <div className='d-flex align-items-center'>
                    <File className='person'/>
                    <b className='mt-2'>Your feed</b>
                </div>
                <div className='d-flex'>
                  <Disc />
                  <b className=''>Discover</b>
                </div>
                <div className='d-flex'>
                <People />
                  <b className=''>Your Groups</b>
                </div>
                <div className='d-flex'>
                <Plus />
                  <b className=''>Create new group</b>
                </div>
                
            
        </div>
  )
}
