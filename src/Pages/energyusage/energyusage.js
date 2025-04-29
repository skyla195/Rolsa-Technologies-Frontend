import { useState, useContext } from 'react'
import Footer from '../../Components/footer/footer'
import NavigationBar from '../../Components/navbar/navbar'
import './energyusage.css'
import axios from 'axios'
import { UserContext } from '../../contexts/usercontexts/usercontext';



export default function EnergyUsage() {

    const [month, setMonth] = useState("")
    const [power, setPower] = useState("")
    const [time, setTime] = useState("")
    const [message, setMessage] = useState("")
    const [calculatedUsage, setcalculatedUsage] = useState(null)
    
    const { user } = useContext(UserContext);

    

    const handleEnergyUsageSubmit = async (e) => {
        e.preventDefault();

        const energyUsage = power * time;
        
        const userenergyData = {
            email:  user.email,
            month: month,
            power : power,
            time :time,
            totalenergyUsage : energyUsage
        }

        try{
            const response = await axios.post('http://127.0.0.1:8001/Auth/Calculate-Energy-Usage', userenergyData)
            setMessage(`Your Energy Usage for ${month} is ${energyUsage.toFixed(2)} Kwh`)

        }catch(error){
            console.error(error.response)
            setMessage(`An error occured: ${error.response?.data?.detail || error.message}`);
        }
    }


    return (
        <>
            <NavigationBar />

            <div className='page-titles'>Consultation</div>
            <div className='page-sub-titles'>Book your consultation here!</div>

            <form onSubmit={handleEnergyUsageSubmit}>
                <div id='energy-usage-div'>

                    <p className='energy-usage-question'>Month</p>

                    {/* step='any' will allow numbers and float numbers */}
                    <input type='month' value={month} onChange={(e) => setMonth(e.target.value)}  required></input>


                    <p className='energy-usage-question'>Power</p>

                    {/* step='any' will allow numbers and float numbers */}
                    <input type='number' value={power} onChange={(e) => setPower(Number(e.target.value))} placeholder='w' required></input>

                    <p className='energy-usage-question'>Time</p>

                    <input type='number' value={time} onChange={(e) => setTime(Number(e.target.value))} placeholder='hr' required></input>
                </div>

                <button id='energy-usage-button'>Calculate</button>
            </form>

            <div id='energy-usage-results'>
                {message !== null && (
                    <>
                        <h2>{message}</h2>

                    </>
                )}
            </div>
            <Footer />
        </>
    )
}
