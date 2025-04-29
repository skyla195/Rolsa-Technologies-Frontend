import './whyjoinus.css'
import { Link } from 'react-router'
import JoinUsImage from '../../Assets/Images/join-us-image.jpg'

export default function WhyJoinUs() {
    return (

        // making the why join us section, using divs, img and p tags. first is the title, then a div to hold two divs one which will hold the text and image and the other div will hold attributes for  the button
        <>
            <h2 className='homepage-section-titles'>Why Join Us?</h2>

            <div id='why-join-us-section'>
                <div id='text-image-div'>
                    <p>At Rolsa Technologies, we are a local company dedicated to helping our community embrace sustainable energy solutions. We specialize in solar panel installation and maintenance, EV charging stations, and smart home energy management systems, offering innovative technologies that make it easier for you to reduce your carbon footprint and enhance energy efficiency. </p>
                    <img src={JoinUsImage} alt='worker image'></img>
                </div>
                <div id='why-join-us-button-div'><div id='button-div'><Link to="/About-Us">About Us</Link></div></div>
            </div>

        </>
    )
}
