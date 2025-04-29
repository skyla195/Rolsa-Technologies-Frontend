import { createContext, useState } from "react";
import { useNavigate } from "react-router";

export const UserContext = createContext()

export default function UserProvider({children}){
    const[user, setUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    )

    const navigate = useNavigate()

    function login(userData){
        localStorage.setItem("user", JSON.stringify(userData));
        setUser(userData)
        navigate("/User-Hub")
    }

    function logout(){
        localStorage.removeItem("user")
        setUser(null)
        navigate("/")
    }

    return(
        <UserContext.Provider value={{user, login, logout}}>{children}</UserContext.Provider>
    )

}


