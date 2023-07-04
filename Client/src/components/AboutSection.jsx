import React from 'react'
import '../style/AboutSection.css'
function AboutSection() {
  return (
    <div className='about-container' id="about">
       <div className='about-text'>
            <div>
                <h2>Understanding Clickbait</h2>
                <h3> Navigating Deceptive Online Content</h3>
            </div>
            <p className='about-paragraph'>
                 Engaging with clickbait links carries inherent risks, particularly when it comes to malicious or phishing links. 
                 These deceptive practices can lead users to websites or content designed to exploit personal information, spread malware,
                 or perpetrate scams. These malicious links can compromise the security of devices, steal sensitive data, or expose users
                 to financial and identity theft.
            </p>
            <p className='about-paragraph-2'>
               To tackle this issue, this study presents a solution in the form of a web application designed to assist users in determining
              the likelihood of a given headline being clickbait.
            </p>
       </div>
       <div className='about-illustration'>
            <img className='illustration' src='about.png' alt='about clickbait'/>
       </div>
    </div>
  )
}

export default AboutSection