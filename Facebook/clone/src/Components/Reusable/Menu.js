import React from 'react'
import { ChatLeftDots, CollectionPlay, Flag, HouseDoor, Link, PlusSquare, ShopWindow } from 'react-bootstrap-icons'
import { useSelector } from 'react-redux'

export default function Menu() {
    const user = useSelector((state) => state.user.value)
    return (
        <div className='content-left mb-20 answer'>
            <div className='d-flex align-items-center'>
                <img className='me-2 br-20' src={user.photoUrl} width={35} height={35} />
                <b>{'vincy'}</b>
            </div>
            
                <div className='d-flex'>
                    <PlusSquare />
                    <b>{"COVID-19 Information Center"}</b>
                </div>
                <div className='d-flex'>
                    <HouseDoor />
                    <b>{"Pages"}</b>
                </div>
                <div className='d-flex'>
                <Flag />
                    <b>{"Friend"}</b>
                </div>
                <div className='d-flex'>
                    <ChatLeftDots />
                    <b>{"Messager"}</b>
                </div>
                <div className='d-flex'>
                    <ShopWindow />
                    <b>{"Marketplace"}</b>
                </div>
                <div className='d-flex'>
                    <CollectionPlay />
                    <b>{"Videos"}</b>
                </div>
            
        </div>
    )
}
