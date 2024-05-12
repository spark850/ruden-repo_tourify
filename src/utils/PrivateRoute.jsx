import { Navigate, Outlet } from "react-router-dom";
import useAuthStatus from "../hooks/useAuthStatus";

const PrivateRoute = () => {
    const { loggedIn, checkingStatus } = useAuthStatus()

    if(checkingStatus === true){
        return <h3>Loading...</h3>
    }

  return loggedIn ? <Outlet/> : <Navigate to="/log_in"/>
}

export default PrivateRoute