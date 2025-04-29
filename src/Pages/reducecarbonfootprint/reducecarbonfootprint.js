import { Link } from 'react-router'
import Footer from '../../Components/footer/footer'
import NavigationBar from '../../Components/navbar/navbar'
import './reducecarbonfootprint.css'

export default function CarbonFootprint(){
    return(
        <>
            <NavigationBar/>

            <div className='page-titles'>Carbon Footprint</div>
            <div className='page-sub-titles'>How to reduce carbon footprint?</div>

            <div id='reduce-cf-info'>

                <span className='info-div yellow'>
                    <p>Drive less if possible. Walk, take public transportation, carpool, rideshare, or bike instead. Avoid flying if possible. On shorter trips, driving may emit fewer greenhouse gases.</p>
                </span>

                <span className='info-div green'>
                    <p>Switch off lights, and unplug devices when they are not in use. Use fans instead of air conditioning when possible.</p>
                </span>

                <span className='info-div yellow'>
                    <p>Buy less stuff. Bring a reusable bag. Buy used or recycled items whenever possible.</p>
                </span>

                <span className='info-div green'>
                    <p>Wash your clothing in cold water. Buy vintage or recycled clothing. Don’t buy fast fashion.</p>
                </span>

                <span className='info-div yellow'>
                    <p>Eat less meat and more fruits, veggies, grains, and beans. Choose organic and local foods that are in season. Buy in bulk, with a reusable container when possible. Reduce food waste through meal planning and freezing leftovers.</p>
                </span>

                <span className='info-div green'>
                    <p>Use less air conditioning while you drive. Avoid unnecessary braking and acceleration, which waste gas. Avoid traffic jams by using apps like Waze. </p>
                </span>

                <span className='info-div yellow'>
                    <p>Change incandescent light bulbs to LEDs.</p>
                </span>

                <span className='info-div green'>
                    <p>Vote, and join community groups that push for change at the local, state, and federal levels. The most effective solutions to climate change require governmental action. Support companies that are environmentally responsible.</p>
                </span>
            </div>

            <div id='CF-button-div'>
                <p>Calculate your carbon footprint today! Answer some questions and get your carbon footprint score.</p>
                <button id='CF-button'><Link to = "/Calculate-Carbon-Footprint">Calculate Carbon Footprint</Link></button>
            </div>

            <Footer/>
        </>
    )
}
