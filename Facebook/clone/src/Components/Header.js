import React from 'react'
import { Bell, ChatLeftDots, CollectionPlay, Flag, HouseDoor, People, PeopleFill, PersonAdd, PersonCircle, Plus, Power, Search, ShopWindow} from "react-bootstrap-icons"
import { useSelector } from 'react-redux'
import Value from './Value'
import { Link } from 'react-router-dom'
export default function Header() {
    const user = useSelector((state) => state.user.value)

  return (
    <div className='p-3 d-flex background-white justify-content-between align-items-center'>
        <div className='align-items-center d-flex'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg' alt='Facebook-clone' width={30} height={35}/>
            <div className='search-container align-items-center d-flex mx-3 p-1 br-20'>
            <Search className='ms-1 me-1'/>
            <input type='search' placeholder='search facebook' className='search-box mx-1' />
        </div>

        <div className='d-flex menu fs-3 cursor-pointer'>
            <div className='active person'>
            <Link className="nav-link" to="/"><HouseDoor /></Link>
            </div>
            <div className='active'>
            <Link className="nav-link" to="/register"> <People /></Link>
            </div>
            
            <div className='active'>
            <Link className="nav-link" to="/friend"><PersonAdd /></Link>
            </div>

        </div>
        
        </div>
       <div className='profile'>
        <div>
            <PersonCircle />
        </div>
        <b className='usrname ps-3'>{user.displayName}</b>
        <div>
            <Plus />
        </div>
        <div>
            <ChatLeftDots />
        </div>
        <div>
        <Link className="nav-link" to="/notification">  <Bell /></Link>
        </div>
        <div>
            <button type='button' className='btn background-white' title='Logout'>
                <Power className='curssor-pointer' />
            </button>
        </div>
       </div>
    </div>
  )
}
