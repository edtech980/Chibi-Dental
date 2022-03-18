import React from 'react'
import "./Contact.css"
import RoomIcon from "@material-ui/icons/Room"
import AccessTimeIcon from "@material-ui/icons/AccessTime"
import PhoneIcon from "@material-ui/icons/Phone"
import EmailIcon from "@material-ui/icons/Email"
import Header from "./Header"

const Contact = () => {
  return (

    <div>
      <Header />
      <div className="contact">
        <h1 className="contact__header">Get in touch</h1>
        <div className="contact__info">
          <div className="contact__links">

            <div className="link1">
              <RoomIcon style={{fontSize: "50px"}} className="contact__logo" />
                
              <div className="link__info">
                <h1>
                  Address
                </h1>
                <p>
                  1026 Lukhele Str<br />
                  
                </p>
                <p>
                  Phola 2230
                </p>
              </div>
            </div>

            <div className="link1">
              <PhoneIcon style={{fontSize: "50px"}} className="contact__logo" />
                
              <div className="link__info">
                <h1>
                  Call us
                </h1>
                <p>
                  0792664811
                </p>
              </div>
            </div>

            <div className="link1">
              < EmailIcon style={{fontSize: "50px"}} className="contact__logo"/ >
                
              <div className="link__info">
                <h1>
                  Email us
                </h1>
                <p>
                  mika222t@yahoo.com
                </p>
              </div>
            </div>

            <div className="book__schedule">
              <h1 className="book__link">
                When can you book?
              </h1>

              <button>
                Check Out Our Working Hours
              </button>
            </div>
          </div>

          

          <div className="form__section">
            <div className="contact__form">
                <form >
                  <h1>
                    Contact Doctor Chibi
                  </h1>
                  <p>
                    Contact our office and we will contact back regarding the intervantion you require
                  </p>

                  <input type="text" placeholder="Enter your Name" reqquired />
                  <input type="email" placeholder="Enter your Email Address" required />
                  <textarea type="text" placeholder="Enter your Message" required />
                  <button type="submit">
                    Submit Message
                  </button>
                </form>
            </div>

{/*
            <div className="formimg__back" >
              <img 
              src= "http://denticare.bold-themes.com/oscar/wp-content/uploads/sites/15/2020/01/img-contact-form.jpg"
              alt="form image" 
              className="form__img" 
              />
            </div>
  */}
          </div>


          
        </div>
    </div>
    </div>
    
  )
}

export default Contact