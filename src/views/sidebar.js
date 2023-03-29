import React, { useEffect } from 'react'
import "./sidebar.css"
import $ from "jquery"

export default function Sidebar(props) {
    const scrollDown = (ref, id) => {
        var h = 0;
        var blogcards = $('.blog_card');
        for (let i = 0; i < id - 1; i++) {
            h += blogcards[i].offsetHeight;
        }
        window.scrollTo({
            top: ref.current.offsetTop + (h),
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

            <div id='blogs_updates' className='flex-col'>
                <h2 style={{ fontWeight: '600' }}>Updates</h2><a href="javascript:void(0)" class="closebtn" onClick={() => { closeNav() }}>×</a>
                {props.blogs.map((blog) => {
                    return (
                        <div className='flex-row align-items-center update' onClick={() => { scrollDown(props.refrs['blogs'], blog.id) }}>
                            <img src='images/aboutus.jpg' alt='Deepa Gupta Image'></img>
                            <p className='update_title' style={{ textAlign: 'left' }}>{blog.title}</p>
                        </div>
                    )
                })}
            </div >

        </div >

    )
}
