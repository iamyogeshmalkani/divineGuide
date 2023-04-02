import React from 'react'
import "./footer.css"
import PrivacyPolicy from "../../docs/PrivacyPolicy.pdf"
import TermaAndCondition from '../../docs/TermsAndCondition.pdf';

export default function Footer(props) {
    const ScrollTo = (ref) => {
        window.scrollTo({
            top: ref.current.offsetTop,
            behavior: 'smooth',
        });
    };
    return (
        <div className='flex-row w-100 footer text-left'>
            <div className="flex-col aboutus_footer">
                <h1>Astrologer Deepa Gupta</h1>
                <br></br>
                <p><span style={{ fontSize: '1.5rem' }}>The renowned astrologer.</span><br />
                    Astrology depicts Account of stars, providing guidance to make you star</p>
            </div>
            <div className="flex-col">
                <h1>Contact Us</h1>
                <br></br>
                <p className='flex-row footer-contact'><i className="fa-solid fa-phone" style={{ color: "white" }}></i><a href="tel:+918130025582">+91-8130025582</a></p>
                <p className='flex-row footer-contact'><i className="fa-solid fa-envelope" style={{ color: "white" }}></i><a href='mailto:officialastrologerDeepagupta@gmail.com'>officialastrologerDeepagupta@gmail.com</a></p>
            </div>
            <div className="flex-col">
                <h1>Links</h1>
                <br></br>
                <div className='flex-col footer_links'>
                    <a role='button' aria-label='Home' onClick={() => { ScrollTo(props.refrs['home']) }}>Home</a>
                    <a role='button' aria-label='About-Us' onClick={() => { ScrollTo(props.refrs['about']) }}>About US</a>
                    <a role='button' aria-label='Services' onClick={() => { ScrollTo(props.refrs['services']) }}>Services</a>
                    <a role='button' aria-label='Testimonial' onClick={() => { ScrollTo(props.refrs['testimonials']) }}>Testimonial</a>
                    <a role='button' aria-label='Blogs' onClick={() => { ScrollTo(props.refrs['blogs']) }}>Blogs</a>
                    <a aria-label='Privacy-Policy' href={PrivacyPolicy} target="_blank"
                        rel="noreferrer">Privacy Policy</a>
                    <a aria-label='Terms-And_Conditions' href={TermaAndCondition} target="_blank"
                        rel="noreferrer">Terms And Condition</a>
                </div>
            </div>
            <div className="flex-row social-medias">
                <a aria-label='facebook' href='https://www.facebook.com/deepagupta09?mibextid=ZbWKw' target="_blank"><i className="fa-brands fa-facebook fa-3x"></i></a>
                <a aria-label='whatsapp' href='https://wa.me/8130025582' target="_blank"><i className="fa-brands fa-whatsapp fa-3x"></i></a>
                <a aria-label='youtube' href='https://www.youtube.com/@astrologerdeepagupta' target="_blank"><i className="fa-brands fa-youtube fa-3x"></i></a>
                <a aria-label='instagram' href='https://instagram.com' target="_blank"><i className="fa-brands fa-instagram fa-3x"></i></a>
            </div>
        </div>
    )
}
