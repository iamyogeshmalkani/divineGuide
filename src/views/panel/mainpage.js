import React, { useState } from 'react';
import "./mainpage.css"

export default function Panel() {
    const [section, setsection] = useState(1);
    const [personalInfo, setpersonalInfo] = useState({
        name: '',
        contact: '',
        email: '',
        about_us: '',
        image: ''
    });
    const fileToDataUri = (file) => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (event) => {
            resolve(event.target.result)
        };
        reader.readAsDataURL(file);
    })

    async function editPersonalInfo() {
        for (const info in personalInfo) {
            if (personalInfo[info] == '') {
                alert('Fill all the fields')
                return;
            }
        }
        await fetch('http://localhost:4000/personalInfo', {
            method: 'POST',
            headers: { "Content-type": "application/json; charset=UTF-8" },
            body: JSON.stringify(personalInfo)
        })
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <div className='panel'>
            <h1>Welcome To the Panel</h1>
            <select className="form-select edit_sections" onChange={(e) => { setsection(e.target.value) }} >
                <option selected value="1">Personal Information</option>
                <option value="2">Service</option>
                <option value="3">Testimonials</option>
                <option value="4">Blogs</option>
                <option value="5">Social Media</option>
                <option value="6">Banner</option>

            </select>
            <div className='personal_info flex-col section' style={{ display: section == 1 ? 'flex' : 'none' }}>
                <input onChange={(e) => {
                    setpersonalInfo({
                        ...personalInfo, name: e.target.value
                    })
                }} type="text" class="form-control" placeholder="Name" aria-label="Name" />
                <input onChange={(e) => {
                    setpersonalInfo({
                        ...personalInfo, contact: e.target.value
                    })
                }} type="text" class="form-control" placeholder="Contact" aria-label="Contact" />
                <input onChange={(e) => {
                    setpersonalInfo({
                        ...personalInfo, email: e.target.value
                    })
                }} type="text" class="form-control" placeholder="Email" aria-label="Email" />
                <textarea onChange={(e) => {
                    setpersonalInfo({
                        ...personalInfo, about_us: e.target.value.replace(/\n/g, "<br />")
                    })
                }} type="text" class="form-control" placeholder="About Us" aria-label="About Us" />
                <input onChange={async (e) => {
                    await fileToDataUri(e.target.files[0])
                        .then(dataUri => {
                            setpersonalInfo({
                                ...personalInfo, image: dataUri
                            })
                        })

                }} type="file" id="Personal-Image" name="avatar"
                    accept="image/png, image/jpeg" class="form-control" />
                <button className='btn btn-success' onClick={() => { editPersonalInfo() }}>Add</button>
                <button className='btn btn-danger'>Delete</button>

            </div>
            <div className='Service flex-row' style={{ display: section == 2 ? 'flex' : 'none' }}>
                <div className='Services_list flex-row'>
                    <button className='btn'>Astrology</button>
                    <button className='btn'>Astrology</button>
                    <button className='btn'>Astrology</button>
                    <button className='btn'>Astrology</button>
                    <button className='btn'>Astrology</button>
                    <button className='btn'>Astrology</button>
                </div>
                <div className='flex-col section'>
                    <input type="text" class="form-control" placeholder="title" aria-label="title" />
                    <input type="text" class="form-control" placeholder="price" aria-label="price" />
                    <input type="text" class="form-control" placeholder="form" aria-label="form" />
                    <textarea type="text" class="form-control" placeholder="Description" aria-label="Description" />
                    <label>Service Image</label>
                    <input type="file" id="service-Image" name="avatar"
                        accept="image/png, image/jpeg" class="form-control" />
                    <label>QR Image</label>
                    <input type="file" id="QR-Image" name="avatar"
                        accept="image/png, image/jpeg" class="form-control" />
                    <button className='btn btn-success'>Add</button>
                    <button className='btn btn-danger'>Delete</button>
                </div>
            </div>
            <div className='flex-row' style={{ display: section == 3 ? 'flex' : 'none' }}>
                <div className='testimonials_list flex-row'>
                    <div className='panel_testimonial'>
                        <h3>Name</h3>
                        <p>It was very much correct. I could relate the things she told me Thanks Ma'am.</p>
                        <input type='date' value="22-08-2023" disabled></input>
                    </div>
                    <div className='panel_testimonial'>
                        <h3>Name</h3>
                        <p>It was very much correct. I could relate the things she told me Thanks Ma'am.</p>
                        <input type='date' value="22-08-2023" disabled></input>
                    </div>
                    <div className='panel_testimonial'>
                        <h3>Name</h3>
                        <p>It was very much correct. I could relate the things she told me Thanks Ma'am.</p>
                        <input type='date' value="22-08-2023" disabled></input>
                    </div>
                    <div className='panel_testimonial'>
                        <h3>Name</h3>
                        <p>It was very much correct. I could relate the things she told me Thanks Ma'am.</p>
                        <input type='date' value="22-08-2023" disabled></input>
                    </div>
                </div>
                <div className='section flex-col'>
                    <input type="text" class="form-control" placeholder="Creator's Name" aria-label="Creator's Name" />
                    <input type="date" class="form-control" placeholder="Date" aria-label="Date" />
                    <textarea type="text" class="form-control" placeholder="Description" aria-label="Description" />
                    <label>User's Image</label>
                    <input type="file" id="Users-Image" name="avatar"
                        accept="image/png, image/jpeg" class="form-control" />
                    <button className='btn btn-success'>Add</button>
                    <button className='btn btn-danger'>Delete</button>
                </div>
            </div>
            <div className='flex-row' style={{ display: section == 4 ? 'flex' : 'none' }}>
                <div className='blogs_list testimonials_list flex-row'>
                    <div className='panel_blog'>
                        <h3>Name</h3>
                        <p>It was very much correct. I could relate the things she told me Thanks Ma'am.</p>
                        <input type='date' value="22-08-2023" disabled></input>
                    </div>
                    <div className='panel_testimonial'>
                        <h3>Name</h3>
                        <p>It was very much correct. I could relate the things she told me Thanks Ma'am.</p>
                        <input type='date' value="22-08-2023" disabled></input>
                    </div>
                    <div className='panel_testimonial'>
                        <h3>Name</h3>
                        <p>It was very much correct. I could relate the things she told me Thanks Ma'am.</p>
                        <input type='date' value="22-08-2023" disabled></input>
                    </div>
                    <div className='panel_testimonial'>
                        <h3>Name</h3>
                        <p>It was very much correct. I could relate the things she told me Thanks Ma'am.</p>
                        <input type='date' value="22-08-2023" disabled></input>
                    </div>
                </div>
                <div className='section flex-col'>
                    <input type="text" class="form-control" placeholder="Blog Title" aria-label="Blog Title" />
                    <input type="date" class="form-control" placeholder="Date" aria-label="Date" />
                    <label>Blog's Image</label>
                    <input type="file" id="creator-Image" name="avatar"
                        accept="image/png, image/jpeg" class="form-control" />
                    <textarea type="text" class="form-control" placeholder="Blog Decription" aria-label="Blog Decription" />
                    <input type="text" class="form-control" placeholder="Video Url" aria-label="Video Url" />
                    <input type="text" class="form-control" placeholder="form" aria-label="form" />
                    <button className='btn btn-success'>Add</button>
                    <button className='btn btn-danger'>Delete</button>
                </div>
            </div>
            <div className='flex-row' style={{ display: section == 5 ? 'flex' : 'none' }}>
                <div className='Services_list flex-row'>
                    <button type="text" class="btn" >Facebook</button>
                    <button type="text" class="btn" >Facebook</button>
                    <button type="text" class="btn" >Facebook</button>
                    <button type="text" class="btn" >Facebook</button>
                </div>
                <div className='section flex-col'>
                    <input type="text" class="form-control" placeholder="Social Name" aria-label="Social Name" />
                    <input type="text" class="form-control" placeholder="Social Link" aria-label="Social Link" />
                    <button className='btn btn-success'>Add</button>
                    <button className='btn btn-danger'>Delete</button>
                </div>

            </div>
            <div className='flex-row' style={{ display: section == 6 ? 'flex' : 'none' }}>
                <div className='Services_list flex-row'>
                    <div className='panel_testimonial'>
                        <h3>Name</h3>
                        <p>It was very much correct. I could relate the things she told me Thanks Ma'am.</p>
                    </div>
                    <div className='panel_testimonial'>
                        <h3>Name</h3>
                        <p>It was very much correct. I could relate the things she told me Thanks Ma'am.</p>
                    </div>
                </div>
                <div className='section flex-col'>
                    <input type="text" class="form-control" placeholder="Banner Title" aria-label="Social Name" />
                    <input type="file" id="banner-Image" name="avatar"
                        accept="image/png, image/jpeg" class="form-control" />
                    {/* <input type="text" class="form-control" placeholder="Social Link" aria-label="Social Link" /> */}
                    <label>Banner Color</label>
                    <input type="color" id="banner-color"
                        value="#e66465" />
                    <label>Font Color</label>
                    <input type="color" id="font-color"
                        value="#e66465" />
                    <button className='btn btn-success'>Add</button>
                    <button className='btn btn-danger'>Delete</button>
                </div>

            </div>
        </div>
    )
}
