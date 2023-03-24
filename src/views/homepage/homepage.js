import React, { useEffect, useState } from 'react'
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
    let services_html = ``;
    services_homepage[str].map((service) => {
        services_html += `<div class="flex-row"><img src="icons/${service}.png"></img><p>${service}</p></div>`
    })
    $('.services_offered').html(services_html);
    $('.services_homepage_image').attr('src', `icons/navbar/${str}.png`)

}
const services_homepage = {
    'vastu': ['Harmony', 'Health', 'Mental peace', 'Wealth', 'Comfort'],
    'tarot-card': ['Love and Relationship', 'Marriage', "Confusion Solution"],
    'love-relationship': ['Love and Relationship', 'Kundali Matching', 'Child Birth', 'Happy Marrige Consultation'],
    'writing-read': ['Personal Development', 'Self Introspection', 'Compatibility Analysis'],
    'astrology': ['Career', 'Finance', 'Health', 'Court Case', 'Marriage', 'House Purchase']
}
function openModalOnHover(evt) {
    // $(`.${evt.target.className}`).click();
    // $('.modal-backdrop').removeClass("modal-backdrop");
    // $('body').removeClass('modal-open')
}
function closeModalOnLeave() {
    $('close').click();
}

export default function Homepage(props) {
    useEffect(() => {
        setTimeout(() => {
            $('.update_fire').addClass('shakeLeftRight');
        }, 1000)
    }, [])
    const [displayUpdates, setdisplayUpdates] = useState(false);
    return (
        <div className='homepage'>
            <div class="container-fluid d-flex flex-row justify-content-end mail_num" style={{ gap: '10px' }}>
                <div className='mail_and_num flex-row'>
                    <div className='flex-row mail'><i class="fa-solid fa-phone" style={{ color: "white" }}></i>+91-8860417666</div>
                    <div className='flex-row num'><i class="fa-solid fa-envelope" style={{ color: "white" }}></i><a href='mailto:officialastrologerDeepagupta@gmail.com'>officialastrologerDeepagupta@gmail.com</a></div>
                </div>
                <img src='icons/fire-update.png' className='update_fire' onClick={() => { var temp = displayUpdates; setdisplayUpdates(!temp) }}></img>
                <div className='blogs_updates flex-col' style={{ display: displayUpdates ? 'flex' : 'none' }}>
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
                </div>
            </div>
            <nav class="navbar navbar-expand-lg position-relative">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Astrologer Deepa Gupta</a>
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
                                <a class="nav-link" href="#" onClick={() => { scrollDown(props.refrs['testimonials']) }}>TESTIMONIALS</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#" onClick={() => { $('.blogs').show(900, 'swing'); $('.totop').hide(900) }}>BLOGS<sup><img src='icons/navbar/new-1.png'></img></sup></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >
            <div className='flex-row tagline_services justify-content-between'>
                <h1 className='tagLine'><b>Astrology</b> depicts Account of <b>stars</b>, providing guidance to make you <b>star</b></h1>
                <div className='services_homepage'>
                    <img src='icons/navbar/vastu.png' className='service_vastu' data-toggle="modal" data-target="#services_homepage_modal" onClick={() => modalHandler('vastu')} onMouseOver={(e) => openModalOnHover(e)} onMouseLeave={() => closeModalOnLeave()}></img>
                    <img src='icons/navbar/tarot-card.png' className='service_tarot' data-toggle="modal" data-target="#services_homepage_modal" onClick={() => modalHandler('tarot-card')} onMouseOver={(e) => openModalOnHover(e)} onMouseLeave={() => closeModalOnLeave()} ></img>
                    <img src='icons/navbar/love-relationship.png' className='service_l_r' data-toggle="modal" data-target="#services_homepage_modal" onClick={() => modalHandler('love-relationship')} onMouseOver={(e) => openModalOnHover(e)} onMouseLeave={() => closeModalOnLeave()}></img>
                    <img src='icons/navbar/writing-read.png' className='service_writing_read' data-toggle="modal" data-target="#services_homepage_modal" onClick={() => modalHandler('writing-read')} onMouseOver={(e) => openModalOnHover(e)} onMouseLeave={() => closeModalOnLeave()}></img>
                    <img src='icons/navbar/astrology.png' className='service_astrology' data-toggle="modal" data-target="#services_homepage_modal" onClick={() => modalHandler('astrology')} onMouseOver={(e) => openModalOnHover(e)} onMouseLeave={() => closeModalOnLeave()}></img>
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
                    <div class="services_hover_card">
                        <div className='close' style={{ display: 'none' }}>
                            <i class="fa-solid fa-circle-xmark float-right"></i>
                        </div>
                        <div class="service_hover_card_img">
                            <img className='services_homepage_image' src="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg" alt="user-image" />
                        </div>
                        <div className='flex-col'>
                            <p className='pl-2'>You can avail below services.
                            </p>
                            <div className='flex-row flex-wrap services_offered'>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div >


    )
}
