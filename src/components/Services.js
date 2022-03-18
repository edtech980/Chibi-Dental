import React from 'react'
import "./Services.css"
import Service from "./Service"
import Header from './Header'

const Services = () => {

  return (

    <div>

        <Header />
        <div className="services">
        <div className="services__div">
            <Service
                img={"http://denticare.bold-themes.com/oscar/wp-content/uploads/sites/15/2020/01/post-03-1280x1280.jpg"}
                title={"Teeth Braces"}
                desc={"Collaboratively expedite quality manufactured products via client-focused results"}
            />
            <Service
                img={"http://denticare.bold-themes.com/oscar/wp-content/uploads/sites/15/2020/01/post-30-1280x1280.jpg"}
                title={"Prosthetics"}
                desc={"Competently parallel task fully researched data and enterprise process improvements"}
            />
            <Service
                img={"http://denticare.bold-themes.com/oscar/wp-content/uploads/sites/15/2020/03/service_whitening-1280x1280.jpg"}
                title={"Teeth Whitening"}
                desc={"Proactively leverage other resource-leveling converagence rather than inter netwok"}
            />
            <Service
                img={"http://denticare.bold-themes.com/oscar/wp-content/uploads/sites/15/2020/01/post-28-1280x1280.jpg"}
                title={"Implants"}
                desc={"Efficiently innovative source infrastructure via inexpensive materials"}
            />
        </div>
        
    </div>
    </div>
    
  )
}

export default Services