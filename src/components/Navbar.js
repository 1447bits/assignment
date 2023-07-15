import React from 'react'
import "../App.css";
import logo from "../icons/brandLogo.png"
import navMenuIcon from "../icons/navmenu.png"
import CancelIcon from "../icons/cancelIcon.png"


function collapsewNavOptMenu() {
    const menu = document.getElementById("NavOptionsSideMenu")
    menu.style.setProperty("--NavOptionsSideMenu-topVal", "-150vh")
    menu.style.setProperty("opacity", "0")
}
function showNavOptMenu() {
    const menu = document.getElementById("NavOptionsSideMenu")
    menu.style.setProperty("--NavOptionsSideMenu-topVal", "0vh")
    menu.style.setProperty("opacity", "1")
}

function NavOptionsSideMenu(props) {
    return <>
        <div id='NavOptionsSideMenu'> 
            <img id='nav-exp-cancel-icon' src={CancelIcon} alt="alt" onClick={collapsewNavOptMenu} />
            {props.items.map(item => {
                return <span className='NavOptionsSideMenu-item'>
                    {item}
                </span>
            })}
        </div>
    </>
}

function Navbar() {
    return (<>
        <div id='Navbar'>
            <NavOptionsSideMenu items={["Home", "About Us", "Users", "Services", "Products"]} />
            <img src={logo} alt='' />
            <span id="nav-text">
                <h3>Home</h3>
                <h3>About Us</h3>
                <h3 id='selectednav'>Users</h3>
                <h3>Users</h3>
                <h3>Services</h3>
                <h3>Products</h3>
            </span>
            <img src={navMenuIcon} alt='' onClick={showNavOptMenu} />
        </div>
    </>
    )
}

export default Navbar