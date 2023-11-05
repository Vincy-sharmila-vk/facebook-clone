import React from 'react'
import { Bell, CameraVideo, ChatLeftDots, CollectionPlay, HouseDoor, People, PersonAdd, PersonCircle, Plus, Power, Search } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'
import './Style.css'
import { useSelector } from 'react-redux'
export default function Header1() {

  const user = useSelector((state) => state.user.value)



  return (
    <div>
       <div class="header">
        <div class="header__left">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" alt="" />
            <div class="header__input">
                <span class="material-icons">            <Search className='ms-1 me-1'/>
</span>
                <input type="text" placeholder="Search Facebook" />
            </div>
        </div>
        <div class="header__middle">
            <div class="header__option">
                <span class="material-icons">
                <Link className="nav-link" to="/"><HouseDoor /></Link>

                </span>
            </div>
            <div class="header__option">
                <span class="material-icons">            <Link className="nav-link" to="/register"> <People /></Link>
</span>
            </div>
            <div class="header__option">
                <span class="material-icons"> 
                <Link className="nav-link" to="/video"><CollectionPlay /></Link>

                </span>
            </div>
        </div>
        <div class="header__right">
            <div class="header_info">
            <PersonCircle className='profile fs-2'/>

            <b className='usrname ps-3'>{user.displayName}</b>

            </div>
            <span class="material-icons"><Plus />
</span>
            <span class="material-icons">            <ChatLeftDots />
 </span>
            <span class="material-icons">
            <a href="#popup1">  <Bell /></a>
            </span>
            <div id="popup1" class="overlay">
	<div class="popup">
		<h2>Notification</h2>
		<a class="close" href="#">&times;</a>
	<div className='content'>
    <Link className="nav-link" to="/notification">    <h5>see all</h5></Link>
            <h5>Unread</h5>
		</div>
        <div className='content12'>
            
                <img src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg" 
                alt="" />
                <h4>janani</h4>
            
        </div>
	</div>
</div>
            <span class="material-icons">
            <Power className='curssor-pointer' />

            </span>
        </div>
    </div>
              </div>
  )
}
