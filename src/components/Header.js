import logo from "../../foodLogo1.jpeg";

const Header = () =>{
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