import React, { useEffect, useState } from 'react'
import './blogs.css'

export default function Blog(props) {
    const [videos, setvideos] = useState(['1', '2', '3', '4', '5']);
    // const [blogs, setblogs] = useState([{ title: 'विभिन्न दिशाओं में चूल्हा रखने का प्रभाव :  वास्तु की नजर से ', desc: `भोजन हम सभी की जिंदगी का अहम हिस्सा है, जो ना केवल हमें पोषण देता है I बल्कि हमारे मन पर भी प्रभाव डालता है I अच्छा भोजन खाकर हम प्रसन्न और संतुष्ट रहते हैं I इस भोजन को बनाने के लिए हम सब चूल्हे का उपयोग करते हैं I चूल्हे को विभिन्न दिशाओं में रखने से जीवन पर इसका क्या प्रभाव पड़ता है I आइए जानते हैं सृष्टि की रचना में पंच तत्वों का बहुत अहम योगदान है, पंच तत्वों के संतुलन से प्रकृति में संतुलन बना रहता है` + <br /> + `जब यही पंचतत्व हमारे शरीर में संतुलन में होते हैं तो हमारा शरीर स्वस्थ रहता हैI पंचतत्व घर के वास्तु में भी बहुत महत्वपूर्ण स्थान रखते हैं यह तत्व- वायु, जल, अग्नि, पृथ्वी तथा आकाश हैI जब यह तत्व बैलेंस में होते हैं तो घर का वातावरण सकारात्मक बनता हैI इन तत्वों को बैलेंस करने के लिए घर पर चीजें उनके तत्वों के अनुसार निर्धारित दिशा में रखनी चाहिएI जैसे अगर हम गैस चूल्हे की बात करें तो वह अग्नि तत्व का प्रतीक है, अतः अगर हम इसे अग्नि तत्व की दिशा में रखेंगे तो हमें इसके बेहतर परिणाम देखने को मिलेंगे, लेकिन इसे हम दूसरे तत्वों की दिशा में रख देंगे तो परिणाम बदल जाएंगेI` }]);
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
        <div className='blogs new_section' ref={props.refrs}>
            <div className='blogs_heading'>
                <h1 className='text-heading'>Blog</h1>
            </div>
            <div className='blog_cards  flex-row'>
                {/* {
                    blogs.map((blog) => {
                        return (<div className='blog_card'>
                            <div className='blogs_card_head  flex-row'>
                                <div className='head_img'>
                                </div>
                                <div className='header_info'>
                                    <h5>Yogesh Malkani</h5>
                                    <p className='text-content'>2 March</p>
                                </div>
                            </div>
                            <div className='blog_content'>
                                <p>{blog.desc}</p>
                            </div>
                        </div>)
                    })
                } */}
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
