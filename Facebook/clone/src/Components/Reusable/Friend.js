import React from 'react'
import Header from '../Header'
import Menu2 from './Menu2'
import { Images } from 'react-bootstrap-icons'
import Header1 from '../Header1'

export default function Friend() {


  return (
    <div>
      <Header1 />
      <div className='d-flex pt-4 ms-3'>

        <Menu2 />
        <div className='border justify-content-center align-items-center'>
        <div className='carosel'>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
    <div className="card">
  <img src="https://media.istockphoto.com/id/1241789646/photo/moon-in-the-hand.jpg?s=612x612&w=0&k=20&c=A8bKwoolZrU1oHmFaMq4U9pzCVF3jnJp07Qdl6q2fEo=" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">NS creation</h5>
    <p className="card-text">Crate a video</p>
    <a href="#" className="btn btn-primary">Join group</a>
  </div>
</div>
    </div>
    <div className="carousel-item">
    <div className="card">
  <img src="https://static.toiimg.com/thumb/msid-53891743,width-748,height-499,resizemode=4,imgsize-152022/.jpg" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Nature</h5>
    <p className="card-text">group</p>
    <a href="#" className="btn btn-primary align-items-center justify-content-center">Join group</a>
  </div>
</div>
    </div>
    <div className="carousel-item">
    <div className="card">
  <img src="https://image.jimcdn.com/app/cms/image/transf/dimension=1040x10000:format=jpg/path/s2217cd0bb1220415/image/i921c8cdd05b2108e/version/1683748912/antique-photos-and-camera.jpg" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Photography</h5>
    <p className="card-text">Gallery</p>
    <a href="#" className="btn btn-primary">Join group</a>
  </div>
</div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
  </div>
  <button className='btn  w-100' style={{color:'blue'}}><b>View group</b></button>
</div>
<div className='discover'>
      <div className='item'>
        <div className='img'>
        <Images /></div>
        <div className='text'>
        <b>You have completely caught up</b>
        <h4>Check again later for more updates</h4>
        </div>
        </div> 
        <button className='btn btn-primary w-100'>Discover more group</button>

          </div>
        </div>
       </div> 
     <div>
     
     
      </div>
      
    </div>
  )
}
