import React from 'react'
import "./pagenotfound.css"

export default function PageNotFound() {
    return (
        <section class="page_404">
            <div class="four_zero_four_bg">
                <img src='icons/pagenotfound.jpg' alt='not found'></img>
            </div>
            <div class="contant_box_404 flex-col">
                <h3 class="h2">
                    Look like you're lost
                </h3>
                <p>The page you are looking for not available!</p>
                <button class="getquote" onClick={() => { window.location = "/" }}>Go to Home</button>
            </div>
        </section>
    )
}
