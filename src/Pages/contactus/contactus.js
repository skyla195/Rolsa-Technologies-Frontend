import Footer from '../../Components/footer/footer'
import NavigationBar from '../../Components/navbar/navbar'
import './contactus.css'

export default function ContactUs() {
    return (
        <>
            <NavigationBar />
            <div className='page-titles'>Contact Us</div>

            <div className='contact-us-info'>Phone Number - 12345678910</div>

            <div className='contact-us-info'>Email Address - ContactUs@RolsaTechnologies.com</div>

            <div className='contact-us-info'>Address - 609 Hall Dale, New Courtney, DY5 3EH, UK</div>

            <Footer></Footer>
        </>
    )
}
