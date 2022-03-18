import React from "react"
//import Header from "./Header";
import Home from "./Home";
import Contact from "./Contact"
import {BrowserRouter, Routes,  Route} from "react-router-dom"
//import Switch from "react-switch";
import "./App.css"
import Services from "./Services";
import About from "./About"






const App = () => {
   
    


    return (

        <div>
            
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
                <Routes>
                    <Route path="/service" element={<Services />} />
                </Routes>
                <Routes>
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Routes>
                    <Route path="/about" element={<About />} />
                </Routes>
                
            </BrowserRouter>  
        </div>
        
        
    )
}

export default App