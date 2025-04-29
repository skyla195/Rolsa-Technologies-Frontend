import Footer from '../../Components/footer/footer'
import NavigationBar from '../../Components/navbar/navbar'
import './greenenergyproducts.css'

import SolarPanels from '../../Assets/Images/solar-panels.jpg'
import WindTurbines from '../../Assets/Images/wind-turbine.jpg'
import HydroPower from '../../Assets/Images/hydropower.jpg'
import EvCharger from '../../Assets/Images/ev-car.jpg'
import EvScooter from '../../Assets/Images/ev-scooter.jpg'
import SmartAppliance from '../../Assets/Images/smart-appliance.jpg'
import TidalEnergy from '../../Assets/Images/tidal-energy.jpg'
import GeothermalEnergy from '../../Assets/Images/geothermal-heat-pump.jpg'
import LedLights from '../../Assets/Images/led-lights.jpg'

export default function GreenEnergyProducts(){
    return(
        <>
            <NavigationBar/>
            <div className='page-titles'>Green Energy Products</div>

            <div id='green-energy-products-div'>

                <span className='products-info'>
                    <p>Solar Panels</p>
                    <img src={SolarPanels}></img>
                </span>

                <span className='products-info'>
                    <p>Wind Turbines</p>
                    <img src={WindTurbines}></img>
                </span>

                <span className='products-info'>
                    <p>Hydropower</p>
                    <img src={HydroPower}></img>
                </span>

                <span className='products-info'>
                    <p>EV Charger</p>
                    <img src={EvCharger}></img>
                </span>

                <span className='products-info'>
                    <p>Electric Scooter</p>
                    <img src={EvScooter}></img>
                </span>

                <span className='products-info'>
                    <p>Smart Energy Appliances</p>
                    <img src={SmartAppliance}></img>
                </span>

                <span className='products-info'>
                    <p>Tidal Energy</p>
                    <img src={TidalEnergy}></img>
                </span>

                <span className='products-info'>
                    <p>Geothermal Heat Pump</p>
                    <img src={GeothermalEnergy}></img>
                </span>

                <span className='products-info'>
                    <p>Energy Efficient LED Lights</p>
                    <img src={LedLights}></img>
                </span>
            </div>

            <Footer/>
        </>
    )
}
