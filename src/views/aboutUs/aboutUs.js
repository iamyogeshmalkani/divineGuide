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
                    <p className='text-content'>Deepa Gupta</p>
                </div>
                <p className='aboutus_desc text-content'>I started my career in astrology in 2005 and have done Jyotish Acharya Course from the Bhartiya Vidhya Bhavan. I have 17 Years of work experience with an accurate prediction of clients in India and abroad. My skills in the field are Jyotish Acharya, Vastu Vachaspati (Awarded Silver Medal by Institute of Mystiques Sciences, Delhi, and have 5 years experience). I have learned Astro Vastu from Mr. Rahul Kaushik (Jyotish Vedang) to correlate astrology with Vastu for better guidance to my clients. I, also have a good knowledge of Tarot Card Reading, K. P. Astrology, Numerology and Graphology (Handwriting Analysis). I have learned many predictive techniques in my 2 Year research under the guidance of Shree K. N. Rao and Shree Manoj Pathak and have continuously been doing and implementing my research in different areas of astrology. I have written Daily horoscopes for Navbarat Times along with numerous other articles on various transits for Astroyogi, Journal of Astrology (World’s Premier Vedic Astrology Journal), and other portals. <br></br><br></br> I have worked with Late Mr. M.S. Mehta (Retd. IFS officer, Literary and Technical Editor of Journal of Astrology and Lecturer of Bhartiya Vidya Bhawan) on his books Ashtakvarga Concept and Application and Mundane Astrology. I have learned various predictive techniques from him. I have attended several seminars and workshops by renowned astrologers about astrology to get a broader understanding of this science. Along with studying astrology, I also like to teach astrology. I have been teaching astrology for the past 5 years. I have given several accurate and successful predictions to numerous clients and have been recommended by almost all of them, not only in India but abroad as well. I have covered almost all areas of life for prediction and remedy like Love relationships, Marriage, Childbirth, Education, Career/Business Issues, Financial Problems, Relationship Problems, etc. <br></br> <br></br>I believe in helping other people and that was one of the reasons I studied astrology so that I could help others at their low points in life. I fulfil my desire to do some good deeds and attain the goal of my birth by interpreting the future of my clients, written in their horoscope, and by providing accurate guidance and remedies. Outside astrology, I have done a Master’s in Science and PGDCA. Furthermore, I had been working as a Teacher and IT Professional.</p>

            </div>
            <div className="player-holder">
                <div className="player-thumb"></div>
            </div>
        </div>
    )
}
