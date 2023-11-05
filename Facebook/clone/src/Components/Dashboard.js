import React from 'react'
import Header from './Header'
import Content from './Content'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Value from './Value';
import Friend from './Reusable/Friend';
import Header1 from './Header1';
import Notification from './Reusable/Notification';
import Video from './Reusable/Video';

export default function Dashboard() {
  return (
    <div>
      <BrowserRouter>
            <Routes>
                <Route path="/register" element={<Value />} />
                <Route path="/friend" element={<Friend />} />
                <Route path="/header1" element={<Header1 />} />

                <Route path="/notification" element={<Notification />} />
                <Route path="/video" element={<Video />} />


                <Route path="/" element={<Content />} />


            </Routes>
        
        
        </BrowserRouter>
    </div>
  )
}
