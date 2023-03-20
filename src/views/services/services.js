import React from 'react'
import "./services.css"
import $ from "jquery"


export default function Services(props) {
    const data = [{ name: "Vastu", description: "Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content" }, { name: "Tarot Card Reading", description: "Some quick example text to build on the card title and make up the bulk of the card's content." }, { name: "Hand Writing Analysing", description: "Some quick example text to build on the card title and make up the bulk of the card's content." }, { name: "Match Making", description: "Some quick example text to build on the card title and make up the bulk of the card's content." }, { name: "Astrology", description: "Some quick example text to build on the card title and make up the bulk of the card's content." }]
    function modalHandler(data) {
        $('.testimonial_modal_image').attr('src', `icons/popups/${data['name']}.png`);
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
                        return (<div class="card serive_card" data-toggle="modal" data-target="#testimonial_modal" onClick={() => modalHandler(d)} >
                            <img src="https://static.thehoneycombers.com/wp-content/uploads/sites/2/2021/11/tarot-card-Singapore.png" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">{d['name']}</h5>
                                <p class="card-text">{d['description']}</p>
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
        </div>
    )
}
