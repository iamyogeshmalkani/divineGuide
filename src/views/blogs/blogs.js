import React, { useEffect, useState } from 'react'
import './blogs.css'
import $ from "jquery"
import blog1 from "../../constants/blog1.text"
const blogstexts = {}


export default function Blog(props) {
    // async function fetchdata() {
    //     await fetch(blog1)
    //         .then(r => r.text())
    //         .then(text => {
    //             blogstexts['blog1'] = text;
    //         });
    // }
    // useEffect(() => {
    //     fetchdata();
    // })

    const blogs = [{
        title: 'विभिन्न दिशाओं में चूल्हा रखने का प्रभाव :  वास्तु की नजर से ',
        desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
    }, {
        title: 'विभिन्न दिशाओं में चूल्हा रखने का प्रभाव :  वास्तु की नजर से ',
        desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
    }, {
        title: 'विभिन्न दिशाओं में चूल्हा रखने का प्रभाव :  वास्तु की नजर से ',
        desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
    }, {
        title: 'विभिन्न दिशाओं में चूल्हा रखने का प्रभाव :  वास्तु की नजर से ',
        desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
    }, {
        title: 'विभिन्न दिशाओं में चूल्हा रखने का प्रभाव :  वास्तु की नजर से ',
        desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
    }];

    // async function getYoutubeVideos() {

    //     await fetch('https://www.googleapis.com/youtube/v3/search?key=AIzaSyCPKO9kkNp4Q-5_1sME5qBoQ0X1XbEPubk&channelId=UCN-IfflYOp7wYnlofX_3D5g&part=snippet,id&order=date&maxResults=20')
    //         .then(response => response.json())
    //         .then(data => { setvideos(data.items); console.log(data.item) })
    //         .catch(error => {
    //         });
    // }
    return (
        <div className='blogs' ref={props.refrs}>
            <button className=' close btn closeBlogs' onClick={() => { $('.blogs').hide(900); $('.totop').show() }}>
                <i class="fa-solid fa-circle-xmark float-right"></i>
            </button>
            <div className='blogs_heading'>
                <h1 className='text-heading'>Blogs</h1>
            </div>
            <div className='blog_cards  flex-col'>
                {blogs.map((blog) => {
                    return (
                        <BlogCard blog={blog} />
                    )
                })}
            </div>
        </div>
    )
}

const BlogCard = function blogCard(props) {
    console.log(blogstexts);
    return (
        <div className='blog_card'>
            <div className='blogs_card_head  flex-row'>
                <div className='head_img'>
                    <img src='https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fphotos%2Fimages%2Fnewsfeed%2F001%2F960%2F750%2Fd2f.jpg'></img>
                </div>
                <div className='header_info'>
                    <h5>Yogesh Malkani</h5>
                    <p className='text-content'>2 March</p>
                </div>
            </div>
            <div className='blog_content'>
                <iframe width="100%" height="500px"
                    style={{ display: !props.blog.video ? 'none' : 'block' }}
                    src="https://www.youtube.com/embed/tgbNymZ7vqY">
                </iframe>
                <p style={{ display: !props.blog.desc ? 'hidden' : 'visibility' }}>{props.blog.desc}</p>
            </div>
        </div>
    )
}

