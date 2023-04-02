import React, { useState } from 'react'
import './blogs.css'
export default function Blog(props) {

    return (
        <div className='blogs' ref={props.refrs}>
            <div className='blogs_heading'>
                <h1 className='text-heading'>Blogs</h1>
            </div>
            <div className='blog_cards  flex-col'>
                {props.blogs.map((blog, ind) => {
                    return (
                        <BlogCard key={ind} blog={blog} />
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
                <img src={`blogs/${props.blog.img}.jpg`} style={{ display: props.blog.img ? 'block' : 'none' }} alt="Blog Image" loading='lazy'></img>
                <iframe
                    width="100%"
                    height="500px"
                    style={{ display: !props.blog.video ? 'none' : 'block' }}
                    srcDoc={`<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/l85j0eFVzq0?autoplay=1><img src=https://img.youtube.com/vi/l85j0eFVzq0/hqdefault.jpg alt='Video The Dark Knight Rises: What Went Wrong? – Wisecrack Edition'><span>▶</span></a>`}
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

