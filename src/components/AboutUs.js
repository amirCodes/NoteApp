import React from 'react'
import '../assets/styles.css'
export default function AboutUs () {
  return (
    <div>
        <div className='about-section'>
        <h1>About Us Page</h1>
        <p>Some text about who we are and what we do.</p>
        <p>Resize the browser window to see that this page is responsive by the way.</p>
        </div>
        <h2>Our Team</h2>
        <div className='row'>
        <div className='column'>
            <div className='card'>
            <img src='https://www.shareicon.net/data/512x512/2016/05/24/770136_man_512x512.png' alt='Jane' className='' />
            <div className='container'>
                <h2>Jane Doe</h2>
                <p className='title'>CEO & Founder</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>jane@example.com</p>
                <p><button className='button'>Contact</button></p>
            </div>
            </div>
        </div>

        <div className='column'>
            <div className='card'>
            <img src='https://www.shareicon.net/data/512x512/2016/05/24/770136_man_512x512.png' alt='Mike'/>
            <div className='container'>
                <h2>Mike Ross</h2>
                <p className='title'>Art Director</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>mike@example.com</p>
                <p><button className='button'>Contact</button></p>
            </div>
            </div>
        </div>
        
        <div className='column'>
            <div className='card'>
            <img src='https://www.shareicon.net/data/512x512/2016/05/24/770136_man_512x512.png' alt='John'/>
            <div className='container'>
                <h2>John Doe</h2>
                <p className='title'>Designer</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>john@example.com</p>
                <p><button className='button'>Contact</button></p>
            </div>
            </div>
        </div>
        </div>

    </div>
  )
}
