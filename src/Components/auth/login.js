import { Link } from 'react-router'
import './auth.css'
import { useContext, useState } from 'react'
import { UserContext } from '../../contexts/usercontexts/usercontext';
import axios from 'axios'


export default function Login() {

    const { user,login, logout } = useContext(UserContext);

    const [email, setEmail] = useState("")
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
        }

        axios.post('http://127.0.0.1:8001/Auth/Login', userData)
            .then (response => {

                const {message, data} = response.data
                setSucess(message)
                setError("")
                login(data)
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
                    <div className='auth-box login'>
                        <h1>LOGIN</h1>

                        <p>Name</p>
                        <input type='text' name='name' value={name} onChange={(e)=>setName(e.target.value)} required></input>

                        <p>Password</p>
                        <input type='password' name='password' value={password} onChange={(e)=>setPassword(e.target.value)} required></input>

                        <div className='option-div'>
                            <p>Don’t have an account? <Link to="/Sign-up">Sign-up</Link> here</p>
                        </div>

                        <div className='button'><button type='submit'>Login</button></div>

                        {sucess && <p>{sucess}</p>}
                        {error && <p>{error}</p>}
                    </div>
                </form>

            </div>
        </>
    )

}
