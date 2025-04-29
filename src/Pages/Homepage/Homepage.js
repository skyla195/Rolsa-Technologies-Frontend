import './Homepage.css'
import SolarHouse from '../../Assets/Images/way-white-house.jpg'
import NavigationBar from '../../Components/navbar/navbar'
import WhatWeOffer from '../../Components/whatweoffer/whatweoffer'
import WhyJoinUs from '../../Components/whyjoinus/whyjoinus'
import Footer from '../../Components/footer/footer'

export default function Homepage() {
    return (
        <>
            <NavigationBar />
            <div id='houseimage'>
                <img id='image' src={SolarHouse} alt='house image'></img>
            </div>

            <WhatWeOffer/>
            <WhyJoinUs/>

            <Footer/>

        </>
    )
}
