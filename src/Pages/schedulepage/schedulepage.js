import Footer from '../../Components/footer/footer'
import NavigationBar from '../../Components/navbar/navbar'
import './schedulepage.css'

import ConsultationImage from '../../Assets/Images/sch-con-image.jpg'
import InstallationImage from '../../Assets/Images/sch-ins-image.jpg'

import SelectCIimage from '../../Assets/Images/select-C-I.jpg'
import FillDetailsImage from '../../Assets/Images/fill-in-details.jpg'
import ConfirmBookPayImage from '../../Assets/Images/confirm-booking-pay.jpg'
import BookingConfirmedImage from '../../Assets/Images/confirmed.jpg'

import { Link } from 'react-router'

export default function ScheduleConsultationAndInstallation() {
    return (
        <>
            <NavigationBar />
            <div className='page-titles'>Schedule Consultations & Installations</div>
            <div id='sch-consultation-div'>
                <img src={ConsultationImage} alt='consultation image'></img>
                <div id='div-info-title-con'>
                    <h1>Consultations</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin tortor purus platea sit eu id nisi litora libero. Neque vulputate consequat ac amet augue blandit maximus aliquet congue. Pharetra vestibulum posuere ornare faucibus fusce dictumst orci aenean eu facilisis ut volutpat commodo senectus purus himenaeos fames primis convallis nisi.</p>
                </div>
            </div>

            <div id='sch-installation-div'>
                <img src={InstallationImage} alt='installation image'></img>
                <div id='div-info-title-ins'>
                    <h1>Installations</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin tortor purus platea sit eu id nisi litora libero. Neque vulputate consequat ac amet augue blandit maximus aliquet congue. Pharetra vestibulum posuere ornare faucibus fusce dictumst orci aenean eu facilisis ut volutpat commodo senectus purus himenaeos fames primis convallis nisi.</p>
                </div>
            </div>

            <div id='SCI-steps'><h1>4 Easy steps</h1></div>
            <div id='SCI-steps-circles'>
                <div className='SCI-steps-circle'>
                    <img src={SelectCIimage} alt='selecting option image'></img>
                    <p>1. Select Consultation or Installation button below</p>
                </div>

                <div className='SCI-steps-circle'>
                    <img src={FillDetailsImage} alt='filling in details image'></img>
                    <p>2. Fill in details</p>
                </div>

                <div className='SCI-steps-circle'>
                    <img src={ConfirmBookPayImage} alt='paying image'></img>
                    <p>3. Confirm booking and Pay!</p>
                </div>

                <div className='SCI-steps-circle'>
                    <img src={BookingConfirmedImage} alt='booking confirmed image'></img>
                    <p>4. Viola! Booking for consultation or installation is done!</p>
                </div>

            </div>

            <div id='SCI-buttons'>
                <button className='SCI-button yellow'><Link to = '/Book-Consultation'>Book Consultation</Link></button>
                <button className='SCI-button green'><Link to='/Book-Installation'>Book Installations</Link></button>
            </div>



            <Footer />
        </>
    )
}
