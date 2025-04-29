import { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import Footer from '../../Components/footer/footer';
import NavigationBar from '../../Components/navbar/navbar';
import './viewbookings.css';
import { UserContext } from '../../contexts/usercontexts/usercontext';

export default function ViewBookings() {
    const [viewConsultation, setViewConsultation] = useState([]);
    const [viewInstallation, setViewInstallation] = useState([]);
    const [error, setError] = useState("");
    const { user } = useContext(UserContext);

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await axios.post('https://rolsa-technologies-backend.onrender.com/Auth/View-Booking-Details', {
                    email: user.email // Send the user's email in the request body
                });
                console.log(response.data); // Log the response data
                setViewConsultation(response.data.consultationBookings);
                setViewInstallation(response.data.installationBookings);
                setError(""); // Clear any previous errors
            } catch (err) {
                if (err.response) {
                    setError(err.response.data.detail || "An error occurred");
                } else {
                    setError("An error occurred");
                }
                setViewConsultation([]); // Clear consultation bookings on error
                setViewInstallation([]); // Clear installation bookings on error
            }
        };

        fetchBookings();
    }, [user.email]); // Dependency array to refetch if user.email changes

    return (
        <>
            <NavigationBar />

            <div className="view-bookings-container">
                <h1>Your Booking Details</h1>

                {error && <div className="error-message">{error}</div>}

                <h2>Consultation Bookings:</h2>
                {viewConsultation.length > 0 ? (
                    <ul>
                        {viewConsultation.map((booking, index) => (
                            <div key={index}>
                                <h1>booking {index + 1}</h1>
                                <div className='details-css'>
                                    <span>booking for:</span><br></br>
                                    <span>Email Address: {booking.email}</span> <br></br>
                                    <span>Name: {booking.name}</span><br></br>
                                    <span>Phone Number: {booking.phoneNumber}</span><br></br>
                                    <span>Consultation For: {booking.consultationFor}</span><br></br>
                                    <span>Consultation Date: {booking.date}</span><br></br>
                                    <span>Consultation Time: {booking.time}</span>
                                </div>
                            </div>
                        ))}
                    </ul>
                ) : (
                    <p>No consultation bookings found.</p>
                )}
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h2>Installation Bookings:</h2>
                {viewInstallation.length > 0 ? (
                    <ul>
                        {viewInstallation.map((booking, index) => (
                            <div key={index}>
                                <h1>booking {index + 1}</h1>
                                <div className='details-css'>
                                    <span>booking for:</span><br></br>
                                    <span>Email Address: {booking.email}</span> <br></br>
                                    <span>Name: {booking.name}</span><br></br>
                                    <span>Phone Number: {booking.phoneNumber}</span><br></br>
                                    <span>Home Address: {booking.homeAddress}</span><br></br>
                                    <span>Consultation Date: {booking.city}</span><br></br>
                                    <span>Consultation Time: {booking.postCode}</span><br></br>
                                    <span>Consultation Time: {booking.bookingDate}</span><br></br>
                                    <span>Consultation Time: {booking.installationFor}</span><br></br>
                                    <span>Consultation Time: {booking.quantity}</span><br></br>
                                    <span>Consultation Time: {booking.cardholderName}</span><br></br>
                                    <span>Consultation Time: {booking.cardNumber}</span><br></br>
                                    <span>Consultation Time: {booking.costforInstallation}</span><br></br>

                                </div>
                            </div>
                        ))}
                    </ul>
                ) : (
                    <p>No installation bookings found.</p>
                )}
            </div>

            <Footer />
        </>
    );
}