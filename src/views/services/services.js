import React, { useEffect, useState } from 'react'
import "./services.css"
import $ from "jquery"


export default function Services(props) {
    const [qrshow, setqrshow] = useState(false);

    function openForm() {
        var str = $('.testimonial_modal_heading').html();
        if (str == 'Match Making') {
            window.open('https://forms.gle/iuxUkHVx5FsHTvFR7');
        }
        else {
            window.open('https://forms.gle/P6wX9nUZBjd3QMDF9');
        }
    }
    useEffect(() => {
        var elements = document.querySelectorAll('.services_desc');
        elements.forEach(element => {
            if (element.offsetHeight < element.scrollHeight ||
                element.offsetWidth < element.scrollWidth) {
                element.nextSibling.style.visibility = 'visible';
            }
        });
    }, []);

    function serviceModalHandler(data) {
        if (data) {
            $('.testimonial_modal_image').attr('src', `icons/navbar/${data['name']}.png`);
            $('.testimonial_modal_heading').html(data['name']);
            $('.testimonial_modal_description').html(data['description']);
            if (data['name'] != 'Vastu') {
                $('.service_charge').html(`<br></br>To avail the service, please make payment of Rs ${data['price']} and submit the following form`)
            }
            else {
                $('.service_charge').html(`<br></br>Vastu Charges varies as per premises. Please submit the form, we will disclose the details with you once we receive your details`)
            }
        }
    }
    return (
        <div className='services_main' ref={props.refrs}>
            <div className='services_main_heading flex-col'> <h1>Services</h1>
                <p>We are offering below services. please select any service as per your requirement. We can ensure you to give you best suitable and fruitful  guidance.</p>
            </div>

            <div className='services_Offered flex-row'>
                {
                    props.servicesData.map((d) => {
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
                                <div className='closeQr' style={{ display: qrshow ? 'block' : 'none' }} onClick={() => { var qr = qrshow; setqrshow(!qr) }}>
                                    <i class="fa-solid fa-circle-xmark float-right"></i>
                                </div>
                                <img style={{ display: qrshow ? 'block' : 'none' }} src='images/QR.jpg' className='QR_image' alt='QR_Code'></img>
                                <p className='testimonial_modal_description text-content' style={{ display: !qrshow ? 'block' : 'none', fontWeight: '600' }}></p>
                                <p className='text-content service_charge' style={{ fontWeight: '600' }}></p>
                                <button type='button' onClick={() => { var qr = qrshow; setqrshow(!qr) }} className='getquote'>QR Code</button>
                                <button type='button' className='getquote' onClick={() => { openForm() }}>Submission Form</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
