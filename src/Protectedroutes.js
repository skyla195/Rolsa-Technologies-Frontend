import { Outlet, useNavigate } from "react-router"; // Ensure you import from 'react-router-dom'
import { UserContext } from "./contexts/usercontexts/usercontext";
import { useContext, useEffect } from "react";

export default function ProtectedRoutes() {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate("/Login"); // Redirect to login if user is not authenticated
        }
    }, [user, navigate]); // Dependency array includes user and navigate

    return user ? <Outlet /> : null; // Render Outlet if user is authenticated
}
