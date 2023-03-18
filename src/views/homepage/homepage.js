import React from 'react'
import "./homepage.css"
import $ from "jquery";

// Function used to scroll to a perticular section
const scrollDown = (ref) => {
    console.log(ref);
    window.scrollTo({
        top: ref.current.offsetTop,
        behavior: 'smooth',
    });
};
function modalHandler(str) {
    $('#services_homepage_modal_title').html(str);

}

export default function Homepage(props) {
    return (
        <div className='homepage'>
            <div class="container-fluid d-flex flex-row justify-content-end mail_num" style={{ gap: '10px' }}>
                <div className='flex-row'><i class="fa-solid fa-phone" style={{ color: "white" }}></i>  +91-8860417666</div>
                <div className='flex-row'><i class="fa-solid fa-envelope" style={{ color: "white" }}></i>  yogeshmalkani28@gmail.com</div>
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
                                <a class="nav-link" href="#" onClick={() => { scrollDown(props.refrs['about']) }}>ABOUT US</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#" onClick={() => { scrollDown(props.refrs['services']) }}>SERVICES</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">BLOGS</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#" onClick={() => { scrollDown(props.refrs['testimonials']) }}>TESTIMONIALS</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >
            <div className='flex-row tagline_services'>
                <h1 className='tagLine'><b>Astrology</b> depicts Account of <b>stars</b>, providing guidance to make you <b>star</b></h1>
                <div className='flex-col services_homepage'>
                    <img src='icons/navbar/astrology.png' className='service_astro' data-toggle="modal" data-target="#services_homepage_modal" onClick={() => modalHandler('astro')}></img>
                    <img src='icons/navbar/taro-card.png' className='service_taro' data-toggle="modal" data-target="#services_homepage_modal" onClick={() => modalHandler('astro')}></img>
                    <img src='icons/navbar/Love-and-Relationship-main-icon.png' data-toggle="modal" data-target="#services_homepage_modal" className='service_l_r' onClick={() => modalHandler('astro')}></img>
                    <img src='icons/navbar/hand-writting-reading-main-icon.png' data-toggle="modal" data-target="#services_homepage_modal" className='service_writing_read' onClick={() => modalHandler('astro')}></img>
                    <img src='icons/navbar/astrology-2.png' className='service_astro2' data-toggle="modal" data-target="#services_homepage_modal" onClick={() => modalHandler('astro')}></img>
                </div>
            </div>
            <div className='social_medias flex-row'>
                <a href='facebook.com'><i class="fa-brands fa-facebook"></i></a>
                <a href='whatsapp.com'><i class="fa-brands fa-whatsapp"></i></a>
                <a href='youtube.com'><i class="fa-brands fa-youtube"></i></a>
                <a href='instagram.com'><i class="fa-brands fa-instagram"></i></a>

            </div>
            <div class="modal fade" id="services_homepage_modal" tabindex="-1" role="dialog" aria-labelledby="services_homapge_modal" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered m-auto" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="services_homepage_modal_title">Modal title</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            ...
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

        </div >


    )
}
