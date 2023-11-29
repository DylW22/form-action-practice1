import { getAuth, signOut } from "firebase/auth";
import { checkLoginStatus } from "./firebaseService";
import { useNavigate } from "react-router-dom";
const Footer = () => {
    const navigate = useNavigate();
    const handleLogOut = () => {
        const auth = getAuth();
        signOut(auth)
        .then(() => {
       
          console.log("Logout successful.")
          navigate('/login')
          /*
          checkLoginStatus()
          .then((result) => {
              console.log('I indeed logged out: ', result);
              
           
          })
          .catch((error) => {
              console.log("Auth failed: ", error)
          })*/
          //console.log(state)
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error(`Error code: ${errorCode}, error message: ${errorMessage}`)
        })
    }


    return(
        <div className="bg-gray-800 text-white text-center py-4 fixed bottom-0 w-full">
            <h1 className="flex-1">This is my footer.</h1>
            <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={()=> handleLogOut()}          
            >Logout</button>
        </div>
    )
}


export default Footer;