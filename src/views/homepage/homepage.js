import React from 'react'
import "./homepage.css"

// Function used to scroll to a perticular section
const scrollDown = (ref) => {
    console.log(ref);
    window.scrollTo({
        top: ref.current.offsetTop,
        behavior: 'smooth',
    });
};

export default function Homepage(props) {
    return (
        <div className='homepage'>
            <div class="container-fluid d-flex flex-row justify-content-end mail_num">
                <p>+918860417666</p>
                <p>yogeshmalkani28@gmail.com</p>
            </div>
            <nav class="navbar navbar-expand-lg position-relative">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Divine</a>
                    <button class="navbar-toggler navbar_mobile_button" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <img src="icons/navbar/mobilenavbar.svg" alt='-'></img>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul class="navbar-nav mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" href="#" onClick={() => { scrollDown(props.refrs['about']) }}>About Us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#" onClick={() => { scrollDown(props.refrs['services']) }}>Service</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Blogs</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#" onClick={() => { scrollDown(props.refrs['testimonials']) }}>Testimonials</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >
            <div className='flex-row tagline_services'>
                <h1 className='tagLine'><b>Astrology</b> depicts Account of <b>stars</b>, providing guidance to make you <b>star</b></h1>
            </div>

        </div >


    )
}
