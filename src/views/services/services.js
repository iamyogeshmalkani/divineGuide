import React, { useEffect } from 'react'
import "./services.css"
import $ from "jquery"


export default function Services(props) {
    useEffect(() => {
        var elements = document.querySelectorAll('.services_desc');
        elements.forEach(element => {
            console.log(element);
            if (element.offsetHeight < element.scrollHeight ||
                element.offsetWidth < element.scrollWidth) {
                element.nextSibling.style.visibility = 'visible';
                // your element has overflow and truncated
                // show read more / read less button
            } else {
                console.log('bii')

                // your element doesn't overflow (not truncated)
            }
        });
    }, []);

    const data = [{
        name: "Vastu", description: `Vastu Shastra is based on the concept of scientifically combining the five basic elements – earth, water, fire, air and sky – to create a pleasant setting.If any element is more or less then it won’t give fruitful outcome.So, It is advisable to  have these elements to be balanced in house so that your atmosphere can provide fruitful outcome. 
        <br></br>यत पिंडे तत ब्रह्माण्डे <br></br>(whatever is there in the microcosm is also there in the macrocosm)
        <br></br>(जो भीतर है वही बाहर है और जो बाहर है वो ही भीतर है ) <br></br> Vasthu principles integrated with architecture boost health, wealth, energy and prosperity and make the living or working atmosphere serene and enlighten.`
    },
    { name: "Tarot Card Reading", description: "Tarot is a divination tool which is used to get guidance and is commonly used to measure potential outcomes and evaluate influences surrounding a person or an event. It helps to give answers to our daily questions of life.<br></br>The best advice tarot can provide when someone with proper genuine intention ask for best suitable option from multiple options." },
    { name: "Hand Writing Analysing", description: "Handwriting analysis can reveal many useful personality traits. It involves Personal Development , self introspection,Compatibility Analysis etc, With the help of handwriting analysis , one can improve themself in all area and many more" },
    { name: "Match Making", description: "Kundli Matching or Guna Milan is the most integral aspect of every Hindu marriage. Hindu astrology lays strong emphasis on Janam Kundali Milan before a couple ties the knot. It is to check compatibility of two individuals in order to have an enchanted and successful marriage." },
    { name: "Astrology", description: "Astrology can help us to understand the past , help to work on present and guide for better future. Besides helping in avoiding strains in marital relationships, business and professional matters, astrology also helps in enjoying good health, prosperity and spiritual advancement<br></br>There is a myth about Astrology that it predicts a future. But Actually Astrology is a tool which share the possible events and help to walk towards better path. One can take a positive approach and indulge himself for indulge himself for better fruitful outcome towards future." },
    {
        name: "Prasana Kundali", description: "Prashna Kundali Astrology is the best way to know about future predictions even in the condition when a person doesn’t know about their Birth Time. Generally getting a proper answer without Birth Detail gets quite complex, but Prashna Kundali is the Astrology Science that gives you an exact answer about your queries related to your future. Prashna Kundali is a time-based kundali made on the basis of the time when the question was asked by someone. A combination of Prashna Kundali and Birth Kundali can easily solve any problem."
    }]
    function serviceModalHandler(data) {
        if (data) {
            $('.testimonial_modal_image').attr('src', `icons/popups/${data['name']}.png`);
            $('.testimonial_modal_heading').html(data['name']);
            $('.testimonial_modal_description').html(data['description']);
        }
    }
    return (
        <div className='services_main' ref={props.refrs}>
            <div className='services_main_heading flex-col'> <h1>Services</h1>
                <p>We are offering below services. please select any service as per your requirement. We can ensure you to give you best suitable and fruitful  guidance.</p>
            </div>

            <div className='services_Offered flex-row'>
                {
                    data.map((d) => {
                        return (<div class="card service_card" data-toggle="modal" data-target="#testimonial_modal" onClick={() => serviceModalHandler(d)} >
                            <img src={`icons/services/${d['name']}.jpg`} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">{d['name']}</h5>
                                <div className='card_title mb-2'></div>
                                <p class="card-text text-content  services_desc">{d['description']}</p>
                                <a class='readmore' style={{ visibility: 'hidden' }} onClick={() => serviceModalHandler(d)}>Read More</a>
                            </div>
                        </div>)
                    })
                }
            </div>
            <div class="modal" id="testimonial_modal" tabindex="-1" role="dialog">
                <div class="modal-dialog modal-dialog-centered m-auto" role="document">
                    <div class="modal-content" style={{ borderRadius: '20px', maxHeight: '500px' }}>
                        <div class="testimonial_modal_card" style={{ borderRadius: '50px' }}>
                            <div className='close' data-dismiss="modal">
                                <i class="fa-solid fa-circle-xmark float-right"></i>
                            </div>
                            <div class="service_hover_card_img">
                                <img className='testimonial_modal_image' src="" alt="user-image" />
                            </div>
                            <div className='flex-col'>
                                <h2 className='testimonial_modal_heading text-heading'></h2>
                                <p className='testimonial_modal_description text-content' style={{ fontWeight: '600' }}></p>
                                <p className='text-content' style={{ fontWeight: '600' }}><br></br><br></br>To avail this service please fill the below form and we will get back to you</p>
                                <button type='button' className='getquote' onClick={() => { window.open('https://forms.gle/P6wX9nUZBjd3QMDF9') }}>Get Quote</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    )
}
