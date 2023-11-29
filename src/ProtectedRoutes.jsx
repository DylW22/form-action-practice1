import verifyAuth from "./verifyAuth"
import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { verifyAuth2 } from "./verifyAuth";
import { useEffect, useState } from "react";


//redirect
const ProtectedRoutes = ({children}) => {
    //const auth = verifyAuth();
    /*
        Using a ProtectedRoute w/ {children} - how can I perform an async authCheck before the parts are rendered?
    */
    const [auth, setAuth] = useState(true);
    useEffect(()=> {
        verifyAuth2()
        .then((result) => {
            setAuth(result)
            console.log(result)
        })
        .catch((error) => {
            console.error("An error occurred: ", error)
        })
    }, [])

    return (
        <>
          
            {auth ? {...children} :  <Navigate to="/login" replace/>}
            <p>Sensitive data</p>
            <Outlet/>
        
        </>
    )
}

export default ProtectedRoutes