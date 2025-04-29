import { useState, useContext } from 'react'
import { Link } from 'react-router'
import Logo from '../../Assets/Images/logo.png'
import MenuIcon from '../../Assets/Images/bars-solid.png'
import './navbar.css'
import { UserContext } from '../../contexts/usercontexts/usercontext'

export default function NavigationBar() {

    const { user, logout } = useContext(UserContext)

    const [menuOpen, setmenuOpen] = useState(false)

    function toggleOpen() {
        setmenuOpen(!menuOpen)
    }

    var openIcon = "";

    if (menuOpen) {
        openIcon = "menu-icon open"
    } else {
        openIcon = "menu-icon"
    }

    return (
        <>
            <header id='nav-bar'>
                <img id='menu-icon' className={menuOpen ? "open" : ""} onClick={toggleOpen} src={MenuIcon} alt='menu icon'></img>
                <nav id='nav-bar-links' className={menuOpen ? "open" : ""}>
                    <Link to='/'>Home</Link>
                    <Link to='/Green-Energy-Products'>Green Energy Products</Link>
                    <Link to='/Reduce-Carbon-Footprint'>Carbon Footprint</Link>
                    <Link to='/Scheduling-Consultation-And-Installation'>Consultations & Installations</Link>
                    <Link to='/Contact-Us'>Contact Us</Link>
                    <Link to='/About-Us'>About Us</Link>

                    {
                        user ?
                            <>
                                <div id='mobile-bar-buttons'>
                                    <div id='mobile-button-links'><Link to='/User-Hub'>User Hub</Link></div>
                                    <div id='mobile-button-links'><Link to='/' onClick={logout}>Logout</Link></div>
                                </div>
                            </>
                            :
                            <>
                                <div id='mobile-bar-buttons'>
                                    <div id='mobile-button-links'><Link to='/Sign-up'>Sign-Up</Link></div>
                                    <div id='mobile-button-links'><Link to='/Login'>Login</Link></div>
                                </div>

                            </>
                    }


                </nav>
                <Link to='/'><img id='logo' src={Logo} alt='logo'></img></Link>

                {
                    user ?
                        <>
                            <div id='nav-bar-buttons'>
                                <div id='desktop-button-links' ><Link to='/User-Hub'>User Hub</Link></div>
                                <div id='desktop-button-links' ><Link to='/' onClick={logout}>Logout</Link></div>
                            </div>
                        </>
                        :
                        <>
                            <div id='nav-bar-buttons'>
                                <div id='desktop-button-links'><Link to='/Sign-up'>Sign-Up</Link></div>
                                <div id='desktop-button-links'><Link to='/Login'>Login</Link></div>
                            </div>

                        </>
                }

            </header>
        </>
    )
}
