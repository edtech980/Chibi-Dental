import React, {useState} from 'react'
import "./Header.css"
import {Link} from "react-router-dom"
import MenuIcon from "@material-ui/icons/Menu";
import RoomIcon from "@material-ui/icons/Room"
import AccessTimeIcon from "@material-ui/icons/AccessTime"
import PhoneIcon from "@material-ui/icons/Phone"

const Header = () => {
    const [active, setActive] = useState(true)
  return (
    <div className="header">
        <div className="time">
                
                <div className="time__logo">
                    <AccessTimeIcon />
                </div>
                <h1>
                    Monday to Friday
                </h1>
                <p>
                    8AM - 5pm
                </p>
                <div className="location__logo">
                    <RoomIcon />
                </div>
                <h1>
                    Address
                </h1>
                <p>
                    1026 Lukhele Str Phola South Africa
                </p>
                <p className="phone">
                    <PhoneIcon className="phone__icon"/>
                    <p>
                        0792664811
                    </p>
                    
                </p>

                
            </div>
        <MenuIcon 
            className="menu__bt"
            onClick={() => setActive(!active)}
        />
            <div className={active ? "header__nav open" : "header__nav closed"}>
                <Link to="/">
                    <div className="header__logo">
                        <h1>Chibi Dental</h1>
                    </div>
                </Link>
                

                <div className="header__navbar">
                    <Link to="/">
                        <h2>
                            Home
                        </h2>
                    </Link>

                    <Link to="/service">
                        <h2>
                            Services
                        </h2>
                    </Link>

                    <Link to="/about">
                        <h2>
                            About
                        </h2>
                    </Link>

                    <Link to="/contact">
                        <h2>
                            Contact
                        </h2>
                    </Link>
                </div>

                <div className="time2">
                
                    <div className="time__logo2">
                        <AccessTimeIcon />
                    </div>
                    <h1>
                        Monday to Friday
                    </h1>
                    <p>
                        8AM - 5pm
                    </p>
                    <div className="location__logo2">
                        <RoomIcon />
                    </div>
                    <h1>
                        Address
                    </h1>
                    <p>
                        1026 Lukhele Str Phola South Africa
                    </p>
                    <p className="phone2">
                        <PhoneIcon className="phone__icon2"/>
                    <p>
                        0792664811
                    </p>
                    
                    </p>

                
                </div>
            </div>
    </div>
  )
}

export default Header