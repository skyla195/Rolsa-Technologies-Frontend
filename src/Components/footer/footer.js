import './footer.css'
import { Link } from 'react-router'
import Logo from '../../Assets/Images/logo.png'

export default function Footer() {
    return (
        <>
            <footer>
                <div id='footer-line'></div>
                <div id='footer-space-div'>
                    <div id='footer-div'><img src={Logo}></img></div>
                    <span id='footer-links'>
                        <Link to='/'>Home</Link>
                        <Link to='/Green-Energy-products'>Green Energy Products</Link>
                        <Link to='/Reduce-Carbon-Footprint'>Carbon Footprint</Link>
                        <Link to='/Scheduling-Consultation-And-Installation'>Consultations & Installations</Link>
                        <Link to='/Contact-Us'>Contact Us</Link>
                        <Link to='/About-Us'>About Us</Link>
                        <Link to='/'>Terms & Conditions</Link>
                    </span>
                </div>
            </footer>
        </>
    )
}
