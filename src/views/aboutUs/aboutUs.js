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
                    <p className='text-heading'>Lorem Ipsum</p>
                </div>
                <p className='aboutus_desc text-content'>She started her career in astrology in 2005 and has done Jyotish Acharya from Bhartiya Vidhya Bhavan, New Delhi. Her work experience is over 13 years and she provides accurate predictions for her clients in India and abroad. Her skills in the field include Jyotish Acharya, Vastu Vachaspati (Awarded Silver Medal by Institute of Mystique Sciences, Delhi and has an experience of 2 years), Tarot Card Reading and a good command on Graphology (Handwriting Analysis). For two years, she underwent her research work and has learned many predictive techniques under the guidance of Shree K. N. Rao and Shree Manoj Pathak. She has been continuously implementing her research in different areas of astrology. She has not only written many research articles published in the Journal of Astrology (World’s Premier Vedic Astrology Journal) but has also worked with Late Mr. M.S. Mehta (Retd. IFS Officer, Literary and Technical Editor of the Journal of Astrology and Lecturer at Bharatiya Vidya Bhawan) on his books Ashtakvarga: Concept and Application and Mundane Astrology. She has attended several seminars and workshops on astrology to get a broader understanding of this science. She has been teaching astrology for the past 2 years and has been recommended by almost all her clients for her accurate predictions. She covers all the important areas of life such as career, education, finances, marriage, match-making, disputes in marital life, foreign travel, legal problems, health issues etc. The main reason for her to pursue astrology as a profession was to use the knowledge of astrology for the benefit of mankind. She fulfills her desire by interpreting the future of her clients and providing accurate guidance and remedies to them.</p>

            </div>
            <div className='aboutUsImage'>
                <img src='images/aboutus.png'></img>

            </div>
        </div>
    )
}
