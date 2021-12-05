// import cloudImage from "./";
import {Navbar} from "react-bootstrap";
import cloudImage from "../../assets/images/cloud.png"

import "./NavigationBar.css"

 function NavigationBar() {
     return (
        <Navbar bg = "light" >
            <div className="items-container">
                <Navbar.Brand>
                    <div className="logo-container">
                        <img src = {cloudImage} className="d-inline-block align-top"/>
                    </div>       
                </Navbar.Brand>
                <Navbar.Brand><p>CloudSocial</p></Navbar.Brand>
            </div>
        </Navbar>
     )
 }
 
 export default NavigationBar
 