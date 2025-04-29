import { useState, useContext } from 'react'
import Footer from '../../Components/footer/footer'
import NavigationBar from '../../Components/navbar/navbar'
import './consultationbooking.css'
import { UserContext } from '../../contexts/usercontexts/usercontext';
import axios from 'axios'



export default function BookConsultation() {

    const [emailAddress, setemailAddress] = useState("")
    const [name, setName] = useState("")
    const [phoneNumber, setphoneNumber] = useState("")
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [consultationFor, setconsultationFor] = useState("")

    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")

    const { user } = useContext(UserContext);


    const handleSubmit = (e) => {
        e.preventDefault();

        const userconsultationData = {
            email: emailAddress,
            name: name,
            phoneNumber: phoneNumber,
            consultationFor: consultationFor,
            date: date,
            time: time

        }
        
        axios.post('http://127.0.0.1:8001/Auth/Booking-Consultation', userconsultationData)
            .then (response =>{
                setSuccess(response.data.message)
                setError("")
            } )
            .catch(err => {
                if (err.response){
                    setError(err.response.data.detail || "An error occured")
                } else{
                    setError("An error occured ")
                    setSuccess("")
                }
            })
        

    }

    return (
        <>
            <NavigationBar />

            <div className='page-titles'>Consultation</div>
            <div className='page-sub-titles'>Book your consultation here!</div>

            <form onSubmit={handleSubmit}>
                <div id='SCH-C-I-questions'>

                    <p className='SCH-C-I-question'>Email Address</p>
                    <input type='email' value={emailAddress} onChange={(e) => setemailAddress(e.target.value)} required></input>

                    <p className='SCH-C-I-question'>Name</p>
                    <input type='text' value={name} onChange={(e) => setName(e.target.value)} required></input>

                    <p className='SCH-C-I-question'>Phone Number</p>
                    <input type='tel' value={phoneNumber} onChange={(e) => setphoneNumber(e.target.value)} required></input>

                    <p className='SCH-C-I-question'>Consultation For</p>
                    <select name='consultation for' id='consultation-for-dropdown' value={consultationFor} onChange={(e) => setconsultationFor(e.target.value)} required>
                        <option value="consultation for">Consultation for</option>
                        <option value="solar panels">Solar Panels</option>
                        <option value="EV charging station">EV Charging Station</option>
                        <option value="smart home system">Smart Home Energy Managment System</option>
                    </select>

                    <p className='SCH-C-I-question'>Date</p>
                    <input type='date' value={date} onChange={(e) => setDate(e.target.value)} required></input>

                    <p className='SCH-C-I-question'>Time</p>
                    <input type='time' value={time} onChange={(e) => setTime(e.target.value)} required></input>


                </div>

                <button id='SCH-C-I-button'>Book Now</button>

                <div className='result-message'>
                    {success && <p>{success}</p>}
                    {error && <p>{error}</p>}

                </div>
            </form>

            <Footer />
        </>
    )
}
