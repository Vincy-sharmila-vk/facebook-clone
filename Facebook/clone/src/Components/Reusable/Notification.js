import React from 'react'
import Header1 from '../Header1'
import { Dot } from 'react-bootstrap-icons'


export default function () {
        return (
                <div>
                        <Header1 />
                        <div className='notifi4'>
                                <div className='notifi1'>
                                        <div className='d-flex notifi m-3 '>
                                                <h1>Notification</h1>
                                                <Dot className='my-4 dot' />
                                                <Dot className='my-4' />
                                                <Dot className='my-4' />
                                        </div>
                                        <div className='d-flex content3'>
                                                <div>
                                                        <img src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg" alt="" />
                                                </div>
                                                <div>
                                                        <h3>Janani</h3>
                                                        <p>hello guys</p>
                                                </div>
                                        </div>
                                        <hr />
                                        <div className='d-flex content3'>
                                                <div>
                                                <img src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg" alt="" />
                                                </div>
                                                <div>
                                                <h3>Monisha</h3>
                                                <p>hello guys</p>
                                                </div>

                                        </div>
                                        <hr />
                                        <div className='d-flex content3'>
                                                <div>
                                                <img src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg" alt="" />
                                                </div>
                                                <div>
                                                <h3>Jani</h3>
                                                <p>hello guys</p>
                                                </div>

                                        </div>
                                        <hr />
                                </div>
                        </div>
                </div>
        )
}
