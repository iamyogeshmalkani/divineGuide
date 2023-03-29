import React, { useState } from 'react'
import './blogs.css'
export default function Blog(props) {

    return (
        <div className='blogs' ref={props.refrs}>
            <div className='blogs_heading'>
                <h1 className='text-heading'>Blogs</h1>
            </div>
            <div className='blog_cards  flex-col'>
                {props.blogs.map((blog) => {
                    return (
                        <BlogCard blog={blog} />
                    )
                })}
            </div>
        </div>
    )
}

const BlogCard = function BlogCard(props) {
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    return (
        <div className='blog_card'>
            <div className='blogs_card_head  flex-row'>
                <div className='head_img'>
                    <img src={`images/${props.blog.avatar}.jpg`} alt='Creator Image'></img>
                </div>
                <div className='header_info'>
                    <h5>{props.blog.creator}</h5>
                    <p className='text-content'>{props.blog.date}</p>
                </div>
            </div>
            <div className='blog_content'>
                <h5 className='blog-title' style={{ display: props.blog.title ? 'block' : 'none' }}>{props.blog.title}</h5>
                <img src={`blogs/${props.blog.img}.jpg`} style={{ display: props.blog.img ? 'block' : 'none' }} alt="Blog Image"></img>
                <iframe
                    width="100%"
                    height="500px"
                    style={{ display: !props.blog.video ? 'none' : 'block' }}
                    src="https://www.youtube.com/embed/l85j0eFVzq0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
                <p style={{ display: props.blog.desc ? 'block' : 'none' }}>{isReadMore ? props.blog?.desc?.slice(0, 600) : props.blog.desc}<span onClick={toggleReadMore} className="read-or-hide">
                    {isReadMore ? "...read more" : " show less"}
                </span></p>
            </div>
        </div >
    )
}

