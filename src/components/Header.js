import logo from "../../foodLogo1.jpeg";
import { useState } from "react";

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
            <li><a href="/home">Home</a></li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
            
        </ul>
        </div>
    </div>
    )
}
export default Header;