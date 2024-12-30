import React, { useState } from 'react';
import { Link } from 'react-router-dom';
let Navbar = () => {
    let [activeMenu, setActiveMenu] = useState(0);
    let activitclass = "menu selected nav-link";
    let menuClass = "menu nav-link";

    let handleMenuClick = (index) => {
        setActiveMenu(index);
        console.log("ok menu colot is change");
    }

    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-expand-sm bg-body-tertiary border-bottom ">
                <div className="container-fluid  ">
                    <a className="navbar-brand  logoSection row " href="/">
                        <img src="/logo.jpg" alt="logo Image" className=' logoNavbar col-5 ' />
                        <h4 className='col-4' >Ashish</h4>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse  " id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className={activeMenu == 0 ? activitclass : menuClass} to="/" onClick={() => handleMenuClick(0)}  >Home</Link>
                            <Link className={activeMenu == 1 ? activitclass : menuClass} to="/about" onClick={() => handleMenuClick(1)} >About me</Link>
                            <Link className={activeMenu == 3 ? activitclass : menuClass} to='/project' onClick={() => handleMenuClick(3)} >Projects</Link>
                        </div>
                    </div>
                </div>
            </nav>

        </>

    );
}

export default Navbar;