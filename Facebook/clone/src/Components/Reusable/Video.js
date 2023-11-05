import React from 'react'
import Header1 from '../Header1'
import Menu2 from './Menu2'

export default function Video() {
  return (
    <div>
      <Header1 />
      <div className='d-flex pt-4 ms-3'>

        <Menu2 />
        <div className='overall'>
      <div className='Container-video' style={{marginLeft:'200px'}}>
        <div className='d-flex m-3'>
          <img src="https://cdn3d.iconscout.com/3d/free/thumb/free-html-5728485-4781249.png" alt="html" width={50} height={50} 
          style={{float:'left',borderRadius:'50%'}}/>
          <h4 className=''style={{marginLeft:'150px',justifyContent:'center'}}>Html class</h4>
        </div>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/qz0aGYrrlhU?si=03b1iZzgalzXXFV5" title="YouTube video player" 
      frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
        </iframe>
        </div>
        <div className='Container-video' style={{marginLeft:'200px',marginTop:'30px'}}>
        <div className='d-flex m-3'>
          <img src="https://logowik.com/content/uploads/images/123_css3.jpg" alt="css" width={50} height={50} 
          style={{float:'left',borderRadius:'50%'}}/>
          <h4 className=''style={{marginLeft:'150px',justifyContent:'center'}}>css class</h4>
        </div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/8xpEuu0s1A4?si=idPhRZeJNfCrklXV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>

        </iframe>
        </div>
        <div className='Container-video' style={{marginLeft:'200px',marginTop:'30px'}}>
        <div className='d-flex m-3'>
          <img src="https://w1.pngwing.com/pngs/136/126/png-transparent-javascript-logo-angularjs-nodejs-computer-programming-web-development-computer-software-jquery-yellow.png" alt="Js" width={50} height={50} 
          style={{float:'left',borderRadius:'50%'}}/>
          <h4 className=''style={{marginLeft:'150px',justifyContent:'center'}}>Javascript class</h4>
        </div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/dBUBYz75gdk?si=M8Ryld3qZgDj9v_C" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>

        </iframe>
        </div>
        <div className='Container-video' style={{marginLeft:'200px',marginTop:'30px'}}>
        <div className='d-flex m-3'>
          <img src="https://w7.pngwing.com/pngs/403/269/png-transparent-react-react-native-logos-brands-in-colors-icon-thumbnail.png" alt="React" width={50} height={50} 
          style={{float:'left',borderRadius:'50%'}}/>
          <h4 className=''style={{marginLeft:'150px',justifyContent:'center'}}>React js class</h4>
        </div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/uLQRrc6ODaY?si=IdKd21cWsa7M-qKX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>

        </iframe>
        </div>
        </div>
        </div>
        </div>
  )
}
