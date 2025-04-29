import { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import Footer from '../../Components/footer/footer';
import NavigationBar from '../../Components/navbar/navbar';
import './viewenergyusage.css';
import { UserContext } from '../../contexts/usercontexts/usercontext';

export default function ViewEnergyUsages() {
    const [viewenergyUsage, setviewenergyUsage] = useState([]);
    const [error, setError] = useState("");
    const { user } = useContext(UserContext);

    useEffect(() => {
        const fetchUsage = async () => {
            try {
                const response = await axios.post('http://127.0.0.1:8001/Auth/View-Energy-Usage', {
                    email: user.email  
                });
                console.log(response.data); 
                setviewenergyUsage(response.data.energyUsages);
                setError("");  
            } catch (err) {
                if (err.response) {
                    setError(err.response.data.detail || "An error occurred");
                } 
                setviewenergyUsage([]); 
            }
        };

        fetchUsage();
    }, [user.email]);  
    return (
        <>
            <NavigationBar />

            <div className="view-energy-usage">
                <h1>Your Energy Usage</h1>

                {error && <div className="error-message">{error}</div>}

                <h2>Energy Usage:</h2>
                {viewenergyUsage.length > 0 ? (
                    <ul>
                        {viewenergyUsage.map((view, index) => (
                            <div key={index}>
                                <h1>Energy Usage {index + 1}</h1>
                                <div className='details-css'>
                                    <span>Energy Usage for:</span><br></br>
                                    <span>Month {view.month}</span> <br></br>
                                    <span>Power: {view.power}</span><br></br>
                                    <span>Time: {view.time}</span><br></br>
                                    <span>Energy Usage: {view.totalenergyUsage}</span><br></br>

                                </div>
                            </div>
                        ))}
                    </ul>
                ) : (
                    <p>No energy usage found.</p>
                )}
            </div>

            <Footer />
        </>
    );
}