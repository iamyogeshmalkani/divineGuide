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
    },
    {
        img: 'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
        name: 'Yogesh Malkani'
    }

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
                            <p className='text-content'>Its an honour for us to share views of our happy ,  satisfied, repeated customer. We are 100% successful for providing them best suitable and fruitful guidance.<i class="fa-solid fa-ditto"></i></p>
                        </div>
                        <div class="col-12 d-flex justify-content-between">
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
