import { Link } from 'react-router'
import './auth.css'
import { useContext, useState } from 'react'
import axios from 'axios'
import { UserContext } from '../../contexts/usercontexts/usercontext';

export default function Signup() {
    const { user,login, logout } = useContext(UserContext);

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] =  useState("");
    const [error, setError] = useState("")
    const [sucess, setSucess] = useState("")


    const handleSubmit = (e)=>{
        e.preventDefault()
        const userData = {
            email,
            name,
            password
        };

        axios.post('http://127.0.0.1:8001/Auth/Sign-up', userData)
            .then (response => {
                setSucess(response.data.message)
                setError("")
                login({email, name})
            })

            .catch (err => {
                if (err.response){
                    setError(err.response.data.detail || "An error occured")

                }else{
                    setError("An error occured")
                }
            })
    }
    

    return (
        <>
            <div className='page-div'>

                <form onSubmit={handleSubmit}>
                    <div className='auth-box'>
                        <h1>SIGN-UP</h1>

                        <p>Email Address</p>
                        <input type='email' name='email address' value={email} onChange={(e) => setEmail(e.target.value)} required></input>

                        <p>Name</p>
                        <input type='text' name='name' value={name} onChange={(e) => setName(e.target.value)} required></input>

                        <p>Password</p>
                        <input type='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} required ></input>

                        <div className='option-div'>
                            <p>Already have an account? <Link to="/Login">Login</Link> here</p>
                        </div>

                        <div className='button'><button type='submit'>Sign-up</button></div>

                        {sucess && <p>{sucess}</p>}
                        {error && <p>{error}</p>}

                    </div>
                </form>

            </div>
        </>
    )

}
