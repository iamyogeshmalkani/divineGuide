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

    const data = [{ name: "Vastu", description: "Vastu Shastra is based on the concept of scientifically combining the five basic elements – earth, water, fire, air and sky – to create a pleasant setting. Vasthu principles integrated with architecture boost health, wealth, energy and prosperity and make the living or working atmosphere serene and enlightened." },
    { name: "Tarot Card Reading", description: "Tarot is a divination tool which is used to get guidance and is commonly used to measure potential outcomes and evaluate influences surrounding a person or an event. It helps to give answers to our daily questions of life ." },
    { name: "Hand Writing Analysing", description: "Handwriting analysis can reveal many useful personality traits. It involves Personal Development , self introspection,Compatibility Analysis etc, With the help of handwriting analysis , one can improve themself in all area and many more" },
    { name: "Match Making", description: "Kundli Matching or Guna Milan is the most integral aspect of every Hindu marriage. Hindu astrology lays strong emphasis on Janam Kundali Milan before a couple ties the knot. It is to check compatibility of two individuals in order to have an enchanted and successful marriage." },
    { name: "Astrology", description: "Astrology can help us to understand the past , help to work on present and guide for better future. Besides helping in avoiding strains in marital relationships, business and professional matters, astrology also helps in enjoying good health, prosperity and spiritual advancement" }]
    function modalHandler(data) {
        $('.testimonial_modal_image').attr('src', `icons/services/${data['name']}.jpg`);
        $('.testimonial_modal_heading').html(data['name']);
        $('.testimonial_modal_description').html(data['description']);
    }
    return (
        <div className='services_main' ref={props.refrs}>
            <div className='services_main_heading flex-col'> <h1>Services</h1>
                <p>Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content</p>
            </div>

            <div className='services_Offered flex-row'>
                {
                    data.map((d) => {
                        return (<div class="card service_card" data-toggle="modal" data-target="#testimonial_modal" onClick={() => modalHandler(d)} >
                            <img src={`icons/services/${d['name']}.jpg`} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">{d['name']}</h5>
                                <div className='card_title mb-2'></div>
                                <p class="card-text text-content  services_desc">{d['description']}</p>
                                <a class='readmore' style={{ visibility: 'hidden' }} onClick={() => modalHandler(d)}>Read More</a>
                            </div>
                        </div>)
                    })
                }
            </div>
            <div class="modal fade" id="testimonial_modal" tabindex="-1" role="dialog" aria-labelledby="testimonial_modal" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered m-auto" role="document">
                    <div class="testimonial_modal_card">
                        <div className='close'>
                            <i class="fa-solid fa-circle-xmark float-right"></i>
                        </div>
                        <div class="service_hover_card_img">
                            <img className='testimonial_modal_image' src="" alt="user-image" />
                        </div>
                        <div className='flex-col'>
                            <h2 className='testimonial_modal_heading text-heading'></h2>
                            <p className='testimonial_modal_description text-content'></p>

                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
