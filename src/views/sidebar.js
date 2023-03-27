import React, { useEffect } from 'react'
import "./sidebar.css"
import $ from "jquery"

export default function Sidebar() {
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
            <div id='blogs_updates' className='flex-col'>
                <h2 style={{ fontWeight: '600' }}>Updates</h2><a href="javascript:void(0)" class="closebtn" onClick={() => { closeNav() }}>×</a>
                <div className='flex-row align-items-center update'>
                    <img src='icons/fire-update.png' className='update_fire'></img>
                    <p className='update_title'>New Astro Todays djcvsc csdgvuscsvuysg</p>
                    <p className='update_date'>2 March 2023</p>
                </div>
                <div className='flex-row align-items-center update'>
                    <img src='icons/fire-update.png' className='update_fire'></img>
                    <p className='update_title'>New Astro Todays</p>
                    <p className='update_date'>2 March 2023</p>
                </div>
                <div className='flex-row align-items-center update'>
                    <img src='icons/fire-update.png' className='update_fire'></img>
                    <p className='update_title'>New Astro Todays</p>
                    <p className='update_date'>2 March 2023</p>
                </div>
            </div >

        </div>

    )
}
