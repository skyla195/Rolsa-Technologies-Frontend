import './whatweoffer.css'
import SolarPanel from '../../Assets/Images/solar-energy_2933997.png'
import EvCarStation from '../../Assets/Images/electric-car.png'
import SmartHome from '../../Assets/Images/smart-home.png'

export default function WhatWeOffer() {
    return (
        <>
            <h2 className='homepage-section-titles'>What We Offer</h2>
            <div id='what-we-offer-section'>
                <div id='product-card1'>
                    <h1>Solar Panels - Installation & Maintenance</h1>
                    <div id='row-1'>
                        <img src={SolarPanel} alt='solar panel icon'></img>
                        <p>We are a local company offering solar panel installation and maintenance services, providing affordable and efficient solar energy solutions for homes and businesses. We specialize in designing and installing custom solar panel systems that meet the specific energy needs of our clients. In addition to installation, we also offer maintenance services, to ensure that your system operates at its best. With a focus on sustainability and customer satisfaction, we make it easy for you to transition to renewable energy and lower your energy costs.</p>
                    </div>
                </div>

                <div id='quote-box'><p id='quote1'>“Energy is the foundation of progress; every decision you make about energy use can either enhance or limit your growth. How you manage your resources today will determine your opportunities tomorrow.”</p></div>

                <div id='product-card2'>
                    <h1>Electric Vehicle Charging Stations</h1>
                    <div id='row-2'>
                        <img src={EvCarStation} alt='electric car icon'></img>
                        <p>We are a local company specializing in the installation of EV charging stations for homes and businesses in the area. Our team provides professional and efficient installation services, ensuring that your electric vehicle charging station is set up safely and tailored to your needs. Whether you’re looking for a charging point at home or a commercial setup, we offer reliable solutions that help make charging your electric vehicle more convenient and accessible. With our expertise, we ensure a smooth process from start to finish.</p>
                    </div>
                </div>

                <div id='quote-box'><p id='quote2'>“Every step you take toward renewable energy is a step closer to a world where nature thrives alongside human progress.”</p></div>

                <div id='product-card3'>
                    <h1>Smart Home Energy Management System</h1>
                    <div id='row-3'>
                        <img src={SmartHome} alt='smart home system icon'></img>
                        <p>We are a local company specializing in the installation of smart home energy management systems. Our solutions help homeowners optimize energy use by providing easy control and monitoring of appliances, lighting, heating, and more, all from a single platform. We tailor our smart home systems to meet your specific needs, making your home more energy-efficient, convenient, and secure. With features like remote control and automation, we ensure that managing your home’s energy consumption is simple, efficient, and cost-effective.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
