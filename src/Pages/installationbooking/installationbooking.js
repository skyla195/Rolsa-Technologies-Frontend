import { useState, useContext } from 'react'
import Footer from '../../Components/footer/footer'
import NavigationBar from '../../Components/navbar/navbar'
import './installationbooking.css'
import axios from 'axios'
import { UserContext } from '../../contexts/usercontexts/usercontext';


export default function BookInstallation() {

    const [emailAddress, setemailAddress] = useState("")
    const [name, setName] = useState("")
    const [phoneNumber, setphoneNumber] = useState("")
    const [homeAddress, sethomeAddress] = useState("")
    const [city, setCity] = useState("")
    const [postCode, setpostCode] = useState("")
    const [date, setDate] = useState("")
    const [installationFor, setinstallationFor] = useState("")
    const [quantity, setQuantity] = useState(0)
    const [cardHolder, setcardHolder] = useState("")
    const [cardNumber, setcardNumber] = useState("")
    const [cvv, setCvv] = useState("")
    const [expiryDate, setexpiryDate] = useState("")

    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")

    const { user } = useContext(UserContext);

    const ProductPrices = {
        "solar panels": 5000,
        "EV charging station": 1000,
        "smart home system": 1500
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const cost = ProductPrices[installationFor] ? ProductPrices[installationFor] * [quantity] : 0;

        const userinstallationData = {
            email: emailAddress,
            name: name,
            phoneNumber: phoneNumber,
            homeAddress: homeAddress,
            city: city,
            postCode: postCode,
            bookingDate: date,
            installationFor: installationFor,
            quantity: String(quantity),
            cardholderName: cardHolder,
            cardNumber: cardNumber,
            expiryDate: expiryDate,
            cvv: cvv,
            costforInstallation: cost

        }

        axios.post('https://rolsa-technologies-backend.onrender.com/Auth/Booking-Installation', userinstallationData)
        .then (response =>{
            setSuccess(JSON.stringify(response.data.message))
            setError("")
        } )
        .catch(err => {
            if (err.response){
                setError(JSON.stringify(err.response.data.detail || "An error occured"))
            } else{
                setError("An error occured ")
                setSuccess("")
            }
        })
        alert(`Booking successful. Total £${cost}`)
    }

    return (
        <>
            <NavigationBar />

            <div className='page-titles'>Installation</div>
            <div className='page-sub-titles'>Book your installation here!</div>

            <form onSubmit={handleSubmit}>
                <div id='SCH-C-I-questions'>

                    <p className='SCH-C-I-question'>Email Address</p>
                    <input type='email' value={emailAddress} onChange={(e) => setemailAddress(e.target.value)} required></input>

                    <p className='SCH-C-I-question'>Name</p>
                    <input type='text' value={name} onChange={(e) => setName(e.target.value)} required></input>

                    <p className='SCH-C-I-question'>Phone Number</p>
                    <input type='tel' value={phoneNumber} onChange={(e) => setphoneNumber(e.target.value)} required></input>

                    <p className='SCH-C-I-question'>Home Address</p>
                    <input type='text' value={homeAddress} onChange={(e) => sethomeAddress(e.target.value)} required></input>

                    <p className='SCH-C-I-question'>City</p>
                    <input type='text' value={city} onChange={(e) => setCity(e.target.value)} required></input>

                    <p className='SCH-C-I-question'>PostCode</p>
                    <input type='text' value={postCode} onChange={(e) => setpostCode(e.target.value)} required></input>

                    <p className='SCH-C-I-question'>Date</p>
                    <input type='date' value={date} onChange={(e) => setDate(e.target.value)} required></input>

                    <p className='SCH-C-I-question'>Installation For</p>
                    <select name='installation for' id='installation-for-dropdown' value={installationFor} onChange={(e) => setinstallationFor(e.target.value)} required>
                        <option value="installation for">Installation for</option>
                        <option value="solar panels">Solar Panels</option>
                        <option value="EV charging station">EV Charging Station</option>
                        <option value="smart home system">Smart Home Energy Managment System</option>
                    </select>

                    {installationFor && (   
                        <>
                            <p className='SCH-C-I-question'>Quantity</p>
                            <input type='number' value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} required></input>

                            <p className='SCH-C-I-question'>Card Holder Name</p>
                            <input type='text' value={cardHolder} onChange={(e) => setcardHolder(e.target.value)} required></input>

                            
                            <p className='SCH-C-I-question'>Card Number</p>
                            <input type='text' value={cardNumber} pattern="\d{16}" title='card number must be 16 digits' onChange={(e) => setcardNumber(e.target.value)} required></input>

                            
                            <p className='SCH-C-I-question'>Expiry Date</p>
                            <input type='date' value={expiryDate} onChange={(e) => setexpiryDate(e.target.value)} required></input>

                            <p className='SCH-C-I-question'>CVV</p>
                            <input type='text' value={cvv} pattern='\d{3}' title='CVV must be 3 digits' onChange={(e) => setCvv(e.target.value)} required></input>
                        </>
                    )}

                </div>

                <button id='SCH-I-button' type='submit'>Book Now</button>

                <div className='result-message'>
                    {success && <p>{success}</p>}
                    {error && <p>{error}</p>}

                </div>
            </form>

            <Footer />
        </>
    )
}
