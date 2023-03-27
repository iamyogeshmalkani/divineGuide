import React, { useEffect } from 'react'
import $ from "jquery"
import "./testimonial.css"
let test_html = ``;
const testimonials = [
    {
        img: 'https://i.pinimg.com/736x/2d/2a/2b/2d2a2ba069f852ecf04c9269416f919b.jpg',
        description: `Talking to her is always a very satisfactory and calming experience :)
        `,
        name: 'Soumya',
        date: '22 March 2023'

    },
    {
        img: 'https://i.pinimg.com/736x/2d/2a/2b/2d2a2ba069f852ecf04c9269416f919b.jpg',
        description: `Her reading is quite good and does deep analysis before giving any prediction.`,
        name: 'Poonam',
        date: '12 March 2023'
    },
    {
        img: 'https://static.vecteezy.com/system/resources/previews/009/397/835/original/man-avatar-clipart-illustration-free-png.png',
        description: `It was very much correct. I could relate the things she told me  Thanks Ma'am.`,
        name: 'Akshay',
        date: '22 March 2023'
    },
    {
        img: 'https://static.vecteezy.com/system/resources/previews/009/397/835/original/man-avatar-clipart-illustration-free-png.png',
        description: `Amazing ❤️ Accurate Predictions ❤️ Waiting for your predictions comes true madam❤️.`,
        name: 'Shibhu',
        date: '16 Feb 2023'
    },
]

export default function Testimonial(props) {

    function checkitem(str) {
        setTimeout(() => {
            if ($('.item-1').hasClass('active')) {
                console.log('first');
                $('.prev').hide();
                $('.next').show();
            }
            else if (
                $(`.item-${Math.ceil(testimonials.length / 3)}`).hasClass('active')
            ) {
                console.log(Math.ceil(testimonials.length / 3))
                $('.prev').show();
                $('.next').hide();
            }
            else {
                console.log('third')
                $('.prev').show();
                $('.next').show();
            }
        }, 700)

    }
    useEffect(() => {
        let count = 0;
        console.log($('.carousel-inner').is(':empty'));
        if ($('.carousel-inner').is(':empty')) {
            console.log('called')
            for (let i = 1; i <= Math.ceil(testimonials.length / 3); i++) {
                $('.carousel-inner').append(
                    `<div class="carousel-item ${i == 1 ? 'active' : ''} item-${i}">
                        <div class="row testimonials_cards_row" id="testimonial${i}">
                        </div>
                    </div>`)
            }
            testimonials.map((test, ind) => {
                count++;
                test_html +=
                    `<div class="col-md-0 mb-3">
                            <div class="testimonial_card">
                                <div class="card_img">
                                    <img src="${test['img']}" alt="user-image" />
                                </div>
                                <div class="card_info">
                                        <div class='info_desc'>
                                            <p>${test['description']}
                                            </p>
                                        </div>
                                        <h5>${test['name']}</h5>
                                        <p>${test['date']}</p>
                                </div>
                                </div>
                            </div>`;
                if (count == 3) {
                    $(`#testimonial${Math.ceil((ind + 1) / 3)}`).append(test_html);
                    test_html = ``;
                    count = 0;
                }
                else if (ind == testimonials.length - 1) {
                    $(`#testimonial${Math.ceil((ind + 1) / 3)}`).append(test_html);
                }

            })
        }
        checkitem(true);
    }, [])
    return (
        <div className='testimonial' ref={props.refrs}>
            <section class="pt-5 pb-5">
                <div class="container">
                    <div class="row testimonials_cards_row">
                        <div class="col-12">
                            <h3 class="mb-3 text-heading testimonial_heading">Testimonial</h3>
                            <p className='text-content'>Its an honour for us to share views of our happy , satisfied, repeated customers. We are 100% successful for providing them best suitable and fruitful guidance.<i class="fa-solid fa-ditto"></i></p>
                            <button class="btn bg-transparent prev w-100" href="#carouselExampleIndicators2" role="button" data-slide="prev" onClick={() => { checkitem(false) }}>
                                <img className='testimonials_arrow' src='icons/arrow-left.png'></img>
                            </button>
                            <button class="btn bg-transparent next w-100" href="#carouselExampleIndicators2" role="button" data-slide="next" onClick={() => { checkitem(false) }}>
                                <img className='testimonials_arrow' src='icons/arrow-right.png'></img>
                            </button>
                        </div>
                        <div class="col-12">
                            <div id="carouselExampleIndicators2" class="carousel slide" data-ride="carousel" data-interval="false">
                                <div class="carousel-inner">
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section >
        </div >


    )
}
