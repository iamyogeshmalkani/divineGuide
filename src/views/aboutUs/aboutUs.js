import React from 'react'
import { useRef } from 'react';
import "./aboutus.css"

export default function AboutUs(props) {
    return (
        <div className='aboutus flex-row w-100 p-4' ref={props.refrs}>
            <div className='aboutusInfo flex-col'>
                <div className='aboutus_heading'>
                    <h1 className='text-heading'>
                        About Us
                    </h1>
                    <p className='text-heading'>Lorem Ipsum</p>
                </div>
                <p className='aboutus_desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

            </div>
            <div className='aboutUsImage'>
                <img src='https://play-lh.googleusercontent.com/JfqBFIyl_5uYsdd5MUYMRe33b9yXdgaFrJ0DhylH_ziQL3LRHodAS9Y7Pnan3c4sDIIg'></img>

            </div>
        </div>
    )
}
