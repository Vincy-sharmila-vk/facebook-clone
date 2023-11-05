import React from 'react'
import { Gift, PeopleFill, PersonAdd, PersonExclamation, PersonLinesFill, PersonPlus } from 'react-bootstrap-icons'

export default function Menu1() {
  return (
<div className='content-left mb-20'>
            <div className='d-flex align-items-center' style={{width:'300px'}}>
                <b>hello</b>
            </div>
            
                <div className='d-flex align-items-center'>
                    <PeopleFill className='person'/>
                    <b className='mt-2'>Home</b>
                </div>
                <div className='d-flex'>
                  <PersonLinesFill />
                  <b className=''>Friend requests</b>
                </div>
                <div className='d-flex'>
                <PersonPlus />
                  <b className=''>Suggestions</b>
                </div>
                <div className='d-flex'>
                <PersonLinesFill />
                  <b className=''>All friends</b>
                </div>
                <div className='d-flex'>
                <Gift />
                  <b className=''>Birthdays</b>
                </div>
                <div className='d-flex'>
                <PersonLinesFill />
                  <b className=''>Custom list</b>
                </div>
            
        </div>
          )
}
