import React from 'react'
import "./banner.css"

export default function Banner() {
    return (
        <div className='banner flex-row'>

            <img className='banner_leftimg' src='https://png.pngtree.com/png-vector/20220918/ourmid/pngtree-durha-maa-hindu-goddess-navratri-and-dussehra-durga-puja-vector-illustration-png-image_6190973.png' alt='icon'></img>
            <div className='flex-row w-50 justify-content-around'>
                <h1>Happy Navaratri</h1>
                <div className='flex-col'>
                    <fieldset>
                        <legend>Special Offer</legend>
                        <legend>UPTO 10% OFF</legend>
                    </fieldset>
                </div>
            </div>

            <img className='banner_rightimg' src='https://png.pngtree.com/png-vector/20220918/ourmid/pngtree-durha-maa-hindu-goddess-navratri-and-dussehra-durga-puja-vector-illustration-png-image_6190973.png' alt='icon'></img>
        </div>
    )
}
