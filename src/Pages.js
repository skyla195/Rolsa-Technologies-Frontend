import { Route, Routes } from 'react-router'
import Homepage from './Pages/Homepage/Homepage'
import CalculateCarbonFootprint from './Pages/calcarbonfootprint/calcarbonfootprint'
import ScheduleConsultationAndInstallation from './Pages/schedulepage/schedulepage'
import BookConsultation from './Pages/consultationbooking/consultationbooking'
import BookInstallation from './Pages/installationbooking/installationbooking'
import ContactUs from './Pages/contactus/contactus'
import AboutUs from './Pages/aboutus/aboutus'
import Signup from './Components/auth/sign-up'
import Login from './Components/auth/login'
import GreenEnergyProducts from './Pages/greenenergyproducts/greenenergyproducts'
import CarbonFootprint from './Pages/reducecarbonfootprint/reducecarbonfootprint'
import UserHub from './Pages/userhub/userhub'
import ProtectedRoutes from './Protectedroutes'
import EnergyUsage from './Pages/energyusage/energyusage'
import ViewBookings from './Pages/viewbookings/viewbookings'
import ViewEnergyUsages from './Pages/viewenergyusage/viewenergyusage'



export default function Pages() {
    return (
        <>

            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/Scheduling-Consultation-And-Installation' element={<ScheduleConsultationAndInstallation />} />
                <Route path='/Contact-Us' element={<ContactUs />} />
                <Route path='/About-Us' element={<AboutUs />} />
                <Route path='/Sign-Up' element={<Signup />} />
                <Route path='/Login' element={<Login />} />
                <Route path='/Green-Energy-products' element={<GreenEnergyProducts />} />
                <Route path='/Reduce-Carbon-Footprint' element={<CarbonFootprint />} />


                <Route path='/User-Hub' element={<UserHub />} />
                <Route path='/View-Bookings' element={<ViewBookings />} />

                <Route path='/Calculate-Energy-Usage' element={<EnergyUsage />} />
                <Route path='/View-Energy-Usage' element={<ViewEnergyUsages />} />



                <Route element={<ProtectedRoutes />}>
                    <Route path='/Book-Consultation' element={<BookConsultation />} />
                    <Route path='/Book-Installation' element={<BookInstallation />} />
                </Route>


                <Route path='/Calculate-Carbon-Footprint' element={<CalculateCarbonFootprint />} />


            </Routes>

        </>
    )
}
