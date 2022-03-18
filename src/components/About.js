import React from 'react'
import "./About.css"
import Header from './Header'

const About = () => {
  return (
    <div>
      <Header />
      <div className="about__us">
        <h1>
            Our Location
        </h1>
        <div className="location">
            <iframe 
              width="600" 
              height="500" 
              id="gmap_canvas" 
              src="https://maps.google.com/maps?q=1026%20Lukheli%20Street,%20Phola,%202233&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameborder="0" 
              scrolling="no" 
              marginheight="0" 
              marginwidth="0">

            </iframe>
        </div>
      </div>
        
    </div>
  )
}

export default About