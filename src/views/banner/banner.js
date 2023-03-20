import React from 'react'
import "./banner.css"

export default function Banner() {
    return (
        <div className='banner flex-row'>
            <img className='banner_leftimg' src='https://png.pngtree.com/png-vector/20220918/ourmid/pngtree-durha-maa-hindu-goddess-navratri-and-dussehra-durga-puja-vector-illustration-png-image_6190973.png'></img>
            <h1>Happy Navaratri</h1>
            <div className='flex-col'>
                <h3>Special Offer</h3>
                <h3>Upto 10% OFF</h3>
            </div>
            <img className='banner_rightimg' src='https://png.pngtree.com/png-vector/20220918/ourmid/pngtree-durha-maa-hindu-goddess-navratri-and-dussehra-durga-puja-vector-illustration-png-image_6190973.png'></img>
        </div>
    )
}
