import Footer from '../../Components/footer/footer'
import NavigationBar from '../../Components/navbar/navbar'
import './calcarbonfootprint.css'
import { useState } from 'react'

export default function CalculateCarbonFootprint() {

    const [electricityBill, setelectricityBill] = useState("")
    const [gasBill, setgasBill] = useState("")
    const [oilBill, setoilBill] = useState("")
    const [yearlymileage, setyearlymileage] = useState("")
    const [NoOfFlightsless, setNoOfFlightsless] = useState("")
    const [NoOfFlightsmore, setNoOfFlightsmore] = useState("")
    const [RecycleNewspaper, setRecycleNewspaper] = useState(false)
    const [RecycleAluminumAndTin, setRecycleAluminumAndTin] = useState(false)
    const [totalFootprint, settotalFootprint] = useState(null)

    const electricityEmissionFactor = 52;
    const gasEmissionFactor = 53;
    const oilEmissionFactor = 56;
    const yearlymileageEmissionFactor = 0.79;
    const NoOfFlightslessEmissionFactor = 275;
    const NoOfFlightsmoreEmissionFactor = 550;

    const calFootprint = () => {
        const electricityEmission = electricityBill * electricityEmissionFactor;
        const gasEmission = gasBill * gasEmissionFactor;
        const oilEmission = oilBill * oilEmissionFactor;
        const yearlymileageEmission = yearlymileage * yearlymileageEmissionFactor;
        const NoOfFlightslessEmission = NoOfFlightsless * NoOfFlightslessEmissionFactor;
        const NoOfFlightsmoreEmission = NoOfFlightsmore * NoOfFlightsmoreEmissionFactor;

        let total = electricityEmission + gasEmission + oilEmission + yearlymileageEmission + NoOfFlightslessEmission + NoOfFlightsmoreEmission;
        if (!RecycleNewspaper) total += 184;
        if (!RecycleAluminumAndTin) total += 166;

        settotalFootprint(total)
    }

    const handleSumbit = (e) => {
        e.preventDefault();
        calFootprint();
    }



    return (
        <>
            <NavigationBar />

            <div className='page-titles'>Calculate Your Carbon Footprint</div>

            <div id='CCF-panoramic-image-div'></div>

            <div id='CCF-h1-div'><h1>Answer these questions below</h1></div>

            <form onSubmit={handleSumbit}>
                <div id='CCF-questions-div'>
                    <p className='CCF-question'>What is your electricity bill for this month?</p>
                    <input type='number' value={electricityBill} onChange={(e) => setelectricityBill(Number(e.target.value))} required></input>

                    <p className='CCF-question'>What is your gas bill for this month?</p>
                    <input type='number' value={gasBill} onChange={(e) => setgasBill(Number(e.target.value))} required></input>

                    <p className='CCF-question'>What is your oil bill for this month?</p>
                    <input type='number' value={oilBill} onChange={(e) => setoilBill(Number(e.target.value))} required></input>

                    <p className='CCF-question'>What is the total yearly mileage on your car?</p>
                    <input type='number' value={yearlymileage} onChange={(e) => setyearlymileage(Number(e.target.value))} required></input>

                    <p className='CCF-question'>In the past year, how many times did you fly for 4 hours or less?</p>
                    <input type='number' min="0" max="4" value={NoOfFlightsless} onChange={(e) => setNoOfFlightsless(Number(e.target.value))} ></input>

                    <p className='CCF-question'>In the past year, how many times did you fly for 4 hours or more?</p>
                    <input type='number' min='4' value={NoOfFlightsmore} onChange={(e) => setNoOfFlightsmore(Number(e.target.value))} ></input>

                    <p className='CCF-question'>Do you recycle newspaper?</p>
                    <input id="no-shadow" type='checkbox' checked={RecycleNewspaper} onChange={() => setRecycleNewspaper(prev => !prev)} ></input>

                    <p className='CCF-question'>Do you recycle aluminum and tin?</p>
                    <input id='no-shadow' type='checkbox' checked={RecycleAluminumAndTin} onChange={() => setRecycleAluminumAndTin(prev => !prev)} ></input>
                </div>

                <button id='CCF-button' type='submit'>Calculate Your Carbon Footprint</button>
            </form>

            <div id='results'>
                {totalFootprint !== null && (
                    <>
                        <h2>{totalFootprint}</h2>
                        <p>Low Carbon Footprint is from 6,000 to 16,0000</p>
                        <p>Average Carbon Footprint is from 16,001 to 22,000</p>
                        <p>High Carbon Footprint is over 22,000</p>
                    </>
                )}
            </div>

            <Footer />
        </>
    )
}
