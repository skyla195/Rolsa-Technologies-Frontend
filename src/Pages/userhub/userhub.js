import { Link, useNavigate } from 'react-router'
import Footer from '../../Components/footer/footer'
import NavigationBar from '../../Components/navbar/navbar'
import './userhub.css'

import { UserContext } from '../../contexts/usercontexts/usercontext'
import { useContext, useState } from 'react'

export default function UserHub() {
    const { user, logout } = useContext(UserContext);
    return (
        <>
            <NavigationBar />

            {/* have to add in user name which is logged in */}
            <div className='page-titles'>Welcome {user ? user.name : ""}</div>

            <div id='user-hub-buttons'>
                <Link to="/View-Bookings" id='yellow'>View Bookings</Link>
                <Link to="/Calculate-Energy-Usage" id='green'>Calculate Your Energy Usage</Link>
                <Link to="/View-Energy-Usage" id='yellow'>View Energy Usage</Link>

            </div>

            <div id='user-hub-features'>
                <div id='user-hub-change-password'>
                    <h1>Change Password</h1>

                    <p>Name</p>
                    <input type='text' name='name' required></input>

                    <p>Old Password</p>
                    <input type='password' name='password' required ></input>

                    <p>New Password</p>
                    <input type='password' name='password' required ></input>

                    <div className='user-hub-button cp'><button type='sumbit'>Change Password</button></div>
                </div>

                <div id='user-hub-change-delete-account'>
                    <h1>Delete Account</h1>

                    <p>Email Address:</p>

                    <p>Name:</p>

                    <div className='user-hub-button da'><button type='sumbit'>Delete Account</button></div>
                </div>
            </div>
            <Footer />

        </>
    )
}

