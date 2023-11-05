import React from 'react'
import Header from './Header'
import Menu1 from './Reusable/Menu1'
import Header1 from './Header1'

export default function Value() {
  return (
    <div>
        <Header1 />
        <div className='d-flex pt-4 ms-3'>
        <Menu1 />
        <div className='p-20' style={{marginLeft:'40px'}}>
          <h1 style={{marginLeft:'20px'}}>Friend Request</h1>
        <div className='status'>
        <div className='card-item' style={{margin:'20px', borderRadius:'20px'}}>
          <img src='https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg'
          style={{width:"300px", borderTopLeftRadius:'20px', borderTopRightRadius:'20px'}} />
          <h3>Jhon</h3>
          <div className='button'style={{display:'grid'}}>
          <button className='btn btn-primary'>Accept</button>
          <button className='btn btn-primary' style={{marginTop:'20px'}}>Delete</button>
</div>
          </div>
          <div className='card-item' style={{margin:'20px',borderRadius:'20px'}}>
          <img src='https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg'
          style={{width:"300px",borderTopLeftRadius:'20px', borderTopRightRadius:'20px'}} />
          <h3>Mike</h3>
          <div className='button' style={{display:"grid",margin:'20px'}}>
          <button className='btn btn-primary'>Accept</button>
          <button className='btn btn-primary' style={{marginTop:'20px'}}>Delete</button>
</div>
          </div>
          <div className='card-item' style={{margin:'20px',borderRadius:'20px'}}>
          <img src='https://i0.wp.com/picjumbo.com/wp-content/uploads/pure-nature-landscape-single-tree-in-green-field-free-photo.jpg?w=600&quality=80'
          style={{width:"300px",borderTopLeftRadius:'20px', borderTopRightRadius:'20px'}} />
          <h3>Jani</h3>
          <div className='button' style={{display:"grid",margin:'20px'}}>
          <button className='btn btn-primary'>Accept</button>
          <button className='btn btn-primary' style={{marginTop:'20px'}}>Delete</button>
</div>
          </div>
          <div className='card-item' style={{margin:'20px',borderRadius:'20px'}}>
          <img src='https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk='
          style={{width:"300px",borderTopLeftRadius:'20px', borderTopRightRadius:'20px'}} />
          <h3>clara</h3>
          <div className='button' style={{display:"grid",margin:'20px'}}>
          <button className='btn btn-primary'>Accept</button>
          <button className='btn btn-primary' style={{marginTop:'20px'}}>Delete</button>
</div>
          </div>
          <div className='card-item' style={{margin:'20px',borderRadius:'20px'}}>
          <img src='https://static.toiimg.com/thumb/msid-53891743,width-748,height-499,resizemode=4,imgsize-152022/.jpg'
          style={{width:"300px",borderTopLeftRadius:'20px', borderTopRightRadius:'20px'}} />
          <h3>Angel</h3>
          <div className='button' style={{display:"grid",margin:'20px'}}>
          <button className='btn btn-primary'>Accept</button>
          <button className='btn btn-primary' style={{marginTop:'20px'}}>Delete</button>
</div>
          </div>
          <div className='card-item' style={{margin:'20px',borderRadius:'20px'}}>
          <img src='https://static.vecteezy.com/system/resources/thumbnails/025/284/015/small/close-up-growing-beautiful-forest-in-glass-ball-and-flying-butterflies-in-nature-outdoors-spring-season-concept-generative-ai-photo.jpg'
          style={{width:"300px",borderTopLeftRadius:'20px', borderTopRightRadius:'20px'}} />
          <h3>jack</h3>
          <div className='button' style={{display:"grid",margin:'20px'}}>
          <button className='btn btn-primary'>Accept</button>
          <button className='btn btn-primary' style={{marginTop:'20px'}}>Delete</button>
</div>
          </div>
         
          </div>
         
       
         
          
        
        
        </div>
    </div>
        </div>
  )
}
