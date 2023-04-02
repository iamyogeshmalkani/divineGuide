import React, { useEffect, useState } from 'react'
import "./homepage.css"
import $ from "jquery";

const scrollDown = (ref) => {
    window.scrollTo({
        top: ref.current.offsetTop,
        behavior: 'smooth',
    });
};

const services_homepage = {
    'Vastu': ['Harmony', 'Health', 'Mental peace', 'Wealth', 'Comfort'],
    'Tarot Card Reading': ['Love and Relationship', 'Marriage', "Confusion Solution"],
    'Match Making': ['Love and Relationship', 'Kundali Matching', 'Child Birth', 'Happy Marrige Consultation'],
    'Hand Writing Analysis': ['Personal Development', 'Self Introspection', 'Compatibility Analysis'],
    'Astrology': ['Career', 'Finance', 'Health', 'Court Case', 'Marriage', 'House Purchase'],
    'Prasana Kundali': ['Yes and No  Answer', 'Detailed Analysis of any Question']
}

const order_services = {
    'Astrology': 0, 'Match Making': 1, 'Prasana Kundali': 2, 'Vastu': 3, 'Tarot Card Reading': 4, 'Hand Writing Analysis': 5
}

export default function Homepage(props) {
    function modalHandler(str) {
        $('#services_homepage_modal_title').html(str);
        let services_html = ``;
        services_homepage[str].map((service) => {
            services_html += `<div className="flex-row"><img src="icons/${service}.png"></img><p>${service}</p></div>`
        })
        $('.services_offered').html(services_html);
        $('.services_homepage_image').attr('src', `icons/navbar/${str}.png`)

    }
    function openNav() {
        document.getElementById("blogs_updates").style.width = "250px";
        document.getElementById("sidebar").style.width = "100%";
        document.getElementById('sidebar_show').style.width = "calc(100vw - 250px)"
    }
    useEffect(() => {
        setTimeout(() => {
            $('.update_fire').addClass('shakeLeftRight');
        }, 1000)
        $('#blogs_update').click(() => {
            openNav();
        })
    }, [])

    function scrollToService() {
        scrollDown(props.refrs['services']);
        var str = $('#services_homepage_modal_title').html();
        $('.service_homepage_modal_close').click();
        var data = props.servicesData[order_services[str]];
        var service_modal = $('.service_card');
        service_modal[order_services[str]].click();
        $('.testimonial_modal_image').attr('src', `icons/navbar/${data['name']}.png`);
        $('.testimonial_modal_heading').html(data['name']);
        $('.testimonial_modal_description').html(data['description']);
        if (data['name'] != 'Vastu') {
            $('.service_charge').html(`<br></br>To avail this service , please make a payment of Rs ${data['price']} and submit the following form`)
        }
        else {
            $('.service_charge').html(`<br></br>Vastu Charges varies as per premises. Please submit the form, we will disclose the details with you once we receive your details`)
        }
        setTimeout(() => {
            $('body').addClass('modal-open');
        }, 1000)
    }
    const [displayUpdates, setdisplayUpdates] = useState(false);
    return (
        <div className='homepage' ref={props.refrs['home']}>
            <div className="container-fluid d-flex flex-row justify-content-end mail_num" style={{ gap: '10px' }}>
                <div className='mail_and_num flex-row'>
                    <div className='flex-row num'><i className="fa-solid fa-phone" style={{ color: "white" }}></i><a href="tel:+918130025582">+91-8130025582</a></div>
                    <div className='flex-row mail'><i className="fa-solid fa-envelope" style={{ color: "white" }}></i><a href='mailto:officialastrologerDeepagupta@gmail.com'>officialastrologerDeepagupta@gmail.com</a></div>
                </div>
                <img src='icons/fire-update.png' className='update_fire' onClick={() => { openNav() }} alt='New Blogs'></img>
            </div>
            <nav className="navbar navbar-expand-lg position-relative">
                <div className="container-fluid" style={{ alignItems: 'self-start' }}>
                    <h1 className="navbar-brand text-heading" href="#">Astrologer Deepa Gupta</h1>
                    <button className="navbar-toggler navbar_mobile_button" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <img src="icons/navbar/mobilenavbar.svg" alt='-'></img>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                                <p aria-label='About-Us' className="nav-link" onClick={() => { scrollDown(props.refrs['about']) }}>ABOUT US</p>
                            </li>
                            <li className="nav-item">
                                <p aria-label='Services' className="nav-link" onClick={() => { scrollDown(props.refrs['services']) }}>SERVICES</p>
                            </li>
                            <li className="nav-item">
                                <p aria-label='Testimonials' className="nav-link" onClick={() => { scrollDown(props.refrs['testimonials']) }}>TESTIMONIALS</p>
                            </li>
                            <li className="nav-item">
                                <p aria-label='Blogs' className="nav-link" onClick={() => { scrollDown(props.refrs['blogs']) }}>BLOGS<sup><img src='icons/navbar/new-1.png' alt='new'></img></sup></p>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >
            <div className='flex-row tagline_services justify-content-between'>
                <h1 className='tagLine'><b>Astrology</b> depicts Account of <b>stars</b>, providing guidance to make you <b>star</b></h1>
                <div className='services_homepage'>
                    {/* <img src='images/service_bg1.webp' className='service_bg'></img> */}
                    <img src='icons/navbar/Vastu.png' className='service_vastu' data-toggle="modal" data-target="#services_homepage_modal" onClick={() => modalHandler('Vastu')} alt='Vastu' loading='lazy'></img>
                    <img src='icons/navbar/Tarot Card Reading.png' className='service_tarot' data-toggle="modal" data-target="#services_homepage_modal" onClick={() => modalHandler('Tarot Card Reading')} alt='Tarot Card' loading='lazy' ></img>
                    <img src='icons/navbar/Match Making.png' className='service_l_r' data-toggle="modal" data-target="#services_homepage_modal" onClick={() => modalHandler('Match Making')} alt='Match Making' loading='lazy'></img>
                    <img src='icons/navbar/Hand Writing Analysis.png' className='service_writing_read' data-toggle="modal" data-target="#services_homepage_modal" onClick={() => modalHandler('Hand Writing Analysis')} alt='Hand Writing' loading='lazy'></img>
                    <img src='icons/navbar/Astrology.png' className='service_astrology' data-toggle="modal" data-target="#services_homepage_modal" onClick={() => modalHandler('Astrology')} alt='Astrology' loading='lazy'></img>
                    <img src='icons/navbar/Prasana Kundali.png' className='service_prasana_kundali' style={{ borderRadius: '50%' }} data-toggle="modal" data-target="#services_homepage_modal" onClick={() => modalHandler('Prasana Kundali')} alt='Prasana Kundali' loading='lazy'></img>
                </div>
            </div>
            <div className="modal fade" id="services_homepage_modal" tabIndex="-1" role="dialog" aria-labelledby="services_homapge_modal" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered m-auto" role="document">

                    <div className='modal-content bg-transparent'>
                        <p id='services_homepage_modal_title' style={{ display: 'none' }}></p>
                        <div className="modal-header" style={{ display: 'none' }}>
                            <button type="button" className="close service_homepage_modal_close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="services_hover_card" onClick={() => { scrollToService() }}>

                            <div className="service_hover_card_img" >
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
            </div>

        </div >


    )
}
