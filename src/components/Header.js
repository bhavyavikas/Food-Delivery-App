import logo from "../../foodLogo1.jpeg";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () =>{
    const [login,setLogin]=useState("Login")

    return (
    <div className="header">
        <div className="logo-container">
        <img className="logo" src={logo} alt="logo"/>
        </div>
        <div className="company-name">
            EatUp !!
        </div>
        <div className="nav-items">
        <ul>
            <li>
            <button className="login-btn"
            onClick={()=>{
                login=== "Login" ? setLogin("Logout"):setLogin("Login")
            }}
            >{login}</button>
            </li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contactus">Contact Us</Link></li>            
        </ul>
        </div>
    </div>
    )
}
export default Header;