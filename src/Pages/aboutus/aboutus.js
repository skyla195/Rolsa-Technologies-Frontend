import Footer from '../../Components/footer/footer'
import NavigationBar from '../../Components/navbar/navbar'
import './aboutus.css'

export default function AboutUs() {
    return (
        <>
            <NavigationBar />
            
            <div className='page-titles'>About Us</div>

            <p id='about-us-info'>At Rolsa Technologies, we are a local company dedicated to helping our community embrace sustainable energy solutions. We specialize in solar panel installation and maintenance, EV charging stations, and smart home energy management systems, offering innovative technologies that make it easier for you to reduce your carbon footprint and enhance energy efficiency. We provide personalized consultations and installations, ensuring that each system is perfectly suited to your home or business needs. Whether you’re looking to lower your energy bills, reduce your environmental impact, or transition to renewable energy, our team at Rolsa Technologies is here to guide you through the process. We also offer carbon footprint calculations and energy usage assessments, providing actionable advice on how to make your space more sustainable. Beyond installations, we offer valuable information on the latest green energy products available in the market, helping you make informed decisions about your energy future. From solar solutions to smart home technologies, Rolsa Technologies is here to equip you with the tools to build a more energy-efficient, eco-friendly home or business. As a proud local company, we are committed to delivering top-quality services to our community, with a focus on sustainability, innovation, and customer satisfaction. Let us help you take the next step towards a cleaner, greener future today.</p>
            <Footer />
        </>
    )
}
