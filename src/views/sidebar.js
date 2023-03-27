import React, { useEffect } from 'react'
import "./sidebar.css"
import $ from "jquery"

export default function Sidebar(props) {
    const scrollDown = (ref) => {
        console.log('cjdshvcj');
        console.log(ref);
        window.scrollTo({
            top: ref.current.offsetTop,
            behavior: 'smooth',
        });
        closeNav();
    };
    function closeNav() {
        document.getElementById("blogs_updates").style.width = "0";
        document.getElementById("root").style.marginLeft = "0";
        document.getElementById("sidebar").style.width = "0";
        document.getElementById("sidebar_show").style.width = "0";
    }
    useEffect(() => {
        $('#sidebar_show').click(() => {
            closeNav();
        })

    })

    return (
        <div id='sidebar'>
            <div id='sidebar_show'>
            </div>
            <div id='blogs_updates' className='flex-col' onClick={() => { scrollDown(props.refrs['blogs']) }}>
                <h2 style={{ fontWeight: '600' }}>Updates</h2><a href="javascript:void(0)" class="closebtn" onClick={() => { closeNav() }}>×</a>
                <div className='flex-row align-items-center update'>
                    <img src='images/about-us.jpg'></img>
                    <p className='update_title'>विभिन्न दिशाओं में चूल्हा रखने का प्रभाव :  वास्तु की नजर से</p>
                    <p className='update_date'>03:40 27-03-2023</p>
                </div>
                <div className='flex-row align-items-center update' onClick={() => { scrollDown(props.refrs['blogs']) }}>
                    <img src='images/about-us.jpg'></img>
                    <p className='update_title'>Astrologer Deepa Gupta received Silver medal for Vastu on October 2018</p>
                    <p className='update_date'>12:40 27-03-2023</p>
                </div>
            </div >

        </div >

    )
}
