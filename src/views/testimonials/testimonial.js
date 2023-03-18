import React, { useEffect } from 'react'
import $ from "jquery"
import "./testimonial.css"
let test_html = ``;
const testimonials = [
    {
        img: 'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
        name: 'Yogesh Malkani'
    },
    {
        img: 'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
        name: 'Yogesh Malkani'
    },
    {
        img: 'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
        name: 'Yogesh Malkani'
    },
    {
        img: 'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
        name: 'Yogesh Malkani'
    }

]

export default function Testimonial(props) {
    useEffect(() => {
        let count = 0;
        console.log($('.carousel-inner').is(':empty'));
        if ($('.carousel-inner').is(':empty')) {
            console.log('called')
            for (let i = 1; i <= Math.ceil(testimonials.length / 3); i++) {
                $('.carousel-inner').append(
                    `<div class="carousel-item ${i == 1 ? 'active' : ''}">
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
                                </div>
                                </div>
                            </div>`;
                if (count == 3) {
                    $(`#testimonial${Math.ceil((ind + 1) / 3)}`).append(test_html);
                    test_html = ``;
                }
                else if (ind == testimonials.length - 1) {
                    $(`#testimonial${Math.ceil((ind + 1) / 3)}`).append(test_html);
                }

            })
        }

    }, [])
    return (
        <div className='testimonial' ref={props.refrs}>
            <section class="pt-5 pb-5">
                <div class="container">
                    <div class="row testimonials_cards_row">
                        <div class="col-12">
                            <h3 class="mb-3 text-heading testimonial_heading">Testimonial</h3>
                            <p className='text-content'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.<i class="fa-solid fa-ditto"></i></p>
                        </div>
                        <div class="col-12 d-flex justify-content-between">
                            <button type="button" class="btn bg-transparent" href="#carouselExampleIndicators2" role="button" data-slide="next">
                                <img src='icons/left-arrow.png'></img>
                            </button>
                            <button class="btn bg-transparent" href="#carouselExampleIndicators2" role="button" data-slide="next">
                                <img src='icons/right-arrow.png '></img>
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
