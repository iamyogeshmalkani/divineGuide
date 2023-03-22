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
    let services_html = ``;
    services_homepage[str].map((service) => {
        services_html += `<div class="flex-row"><img src="icons/${service}.png"></img><p>${service}</p></div>`
    })
    $('.services_offered').html(services_html);
    $('.services_homepage_image').attr('src', `icons/popups/${str}.png`)

}
const services_homepage = {
    'Astrology': ['Harmony', 'Health', 'Mental peace', 'Wealth', 'Comfort'],
    'Tarot Card Reading': ['Love and Relationship', 'Marriage', "Confusion Solution"],
    'Match Making': ['Love and Relationship', 'Kundali Matching', 'Child Birth', 'Happy Marrige Consultation'],
    'Hand Writing Analysing': ['Personal Development', 'Self Introspection', 'Compatibility Analysis'],
    'Vastu': ['Career', 'Finance', 'Health', 'Court Case', 'Marriage', 'House Purchase']
}

export default function Homepage(props) {
    return (
        <div className='homepage'>
            <div class="container-fluid d-flex flex-row justify-content-end mail_num" style={{ gap: '10px' }}>
                <div className='flex-row'><i class="fa-solid fa-phone" style={{ color: "white" }}></i>+91-8860417666</div>
                <div className='flex-row'><i class="fa-solid fa-envelope" style={{ color: "white" }}></i>yogeshmalkani28@gmail.com</div>
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
                                <a class="nav-link" href="#" onClick={() => { scrollDown(props.refrs['blogs']) }}>BLOGS</a>
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
                    <img src='icons/navbar/astro.png' className='service_astro' data-toggle="modal" data-target="#services_homepage_modal" onClick={() => modalHandler('Vastu')}></img>
                    <img src='icons/navbar/taro_card.png' className='service_taro' data-toggle="modal" data-target="#services_homepage_modal" onClick={() => modalHandler('Tarot Card Reading')}></img>
                    <img src='icons/navbar/l_and_r.png' data-toggle="modal" data-target="#services_homepage_modal" className='service_l_r' onClick={() => modalHandler('Match Making')}></img>
                    <img src='icons/navbar/hand_writing_reading.png' data-toggle="modal" data-target="#services_homepage_modal" className='service_writing_read' onClick={() => modalHandler('Hand Writing Analysing')}></img>
                    <img src='icons/navbar/astro_2.png' className='service_astro2' data-toggle="modal" data-target="#services_homepage_modal" onClick={() => modalHandler('Astrology')}></img>
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
