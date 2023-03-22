import React, { useEffect, useState } from 'react'
import './blogs.css'

export default function Blog(props) {
    const [videos, setvideos] = useState(['1', '2', '3', '4', '5']);
    async function getYoutubeVideos() {
        await fetch('https://www.googleapis.com/youtube/v3/search?key=AIzaSyCPKO9kkNp4Q-5_1sME5qBoQ0X1XbEPubk&channelId=UCN-IfflYOp7wYnlofX_3D5g&part=snippet,id&order=date&maxResults=20')
            .then(response => response.json())
            .then(data => { setvideos(data.items); console.log(data.item) })
            .catch(error => {
            });
    }
    useEffect(() => {
        // getYoutubeVideos();
    })
    return (
        <div className='blogs' ref={props.refrs}>
            <div className='blogs_heading'>
                <h1 className='text-heading'>Blog</h1>
                <p className='text-content mt-3'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
            </div>
            <div className='blog_cards  flex-row'>
                {videos.map((video) => {
                    return (
                        <div className='blog_card'>
                            <div className='blogs_card_head  flex-row'>
                                <div className='head_img'>
                                </div>
                                <div className='header_info'>
                                    <h5>Yogesh Malkani</h5>
                                    <p className='text-content'>2 March</p>
                                </div>
                            </div>
                            <div className='blog_content'>
                                {/* <img src='https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg'></img> */}
                                <iframe width="100%" height="500px"
                                    src="https://www.youtube.com/embed/tgbNymZ7vqY">
                                </iframe>
                                {/* <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)</p> */}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}