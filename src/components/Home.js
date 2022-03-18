import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import RoomIcon from "@material-ui/icons/Room"
import AccessTimeIcon from "@material-ui/icons/AccessTime"
import PhoneIcon from "@material-ui/icons/Phone"
import MenuIcon from "@material-ui/icons/Menu";
import "./Home.css"





function Home() {

    const [active, setActive] = useState(true)


    return (
        <div className="home">
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
            <div className={active ? "nav open" : "nav closed"}>
                <Link to="/" onClick={() => setActive(true)}>
                    <div className="logo">
                        <h1>Chibi Dental</h1>
                    </div>
                </Link>
                

                <div className="navbar">
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
            

            <MenuIcon 
                className="menu__btn"
                
                
                onClick={() => setActive(!active)}/>
            <div className="intro">
                <h2>
                    Creating
                </h2>
                <h1>
                    Brighter Smiles
                </h1>

                <div className="btn">
                    <Link to="/service">
                        <buttom className="serv">
                            Check Out Our Services
                        </buttom>
                    </Link>

                    <Link to="/service">
                        <buttom className="promo">
                            Check Out Our Services
                        </buttom>
                    </Link>
                </div>
                
            </div>
            
        </div>
    )
}

export default Home
