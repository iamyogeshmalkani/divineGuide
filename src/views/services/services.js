import React from 'react'
import "./services.css"
import $ from "jquery"


export default function Services(props) {
    const data = ["Vastu", "Tarot Card Reading", "Hand Writing Analysing", "Match Making", "Astrology"]
    function modalHandler(data) {
        $('.modal-title').html(data);
        $('.modal-body').html(`Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content`);
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
                                <h5 class="card-title">{d}</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>)
                    })
                }
            </div>
            <div class="modal fade" id="testimonial_modal" tabindex="-1" role="dialog" aria-labelledby="testimonial_modalTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered m-auto" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
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
        </div>
    )
}
