import {useState, useEffect} from 'react'
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { checkLoginStatus } from './firebaseService';
import { verifyAuth2 } from './verifyAuth';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



const Login = () => {
    const navigate = useNavigate();
    //const myState = verifyAuth2();

    //console.log(myState)
    //Fixed it with async / await:
    /*
    useEffect(()=> {
        const getAuthState = async () => {
            const myState = await verifyAuth2()
            console.log(myState)
            return myState
        }
        getAuthState()
    }
    , [])
*/
    //Fixed with then/catch
    useEffect(() => {
        
        verifyAuth2()
        .then((state)=>{
            console.log("Auth verified", state);
        })
        .catch((error) => {
            console.log("Encountered an error: ", error)
        })
    }, [])


/* Broken
    useEffect(() =>{
        const myState = verifyAuth2();
        console.log(myState)
    }, [])
*/
    const handleLogin = () => {
        const auth = getAuth();
        const email = "testuser@gmail.com"
        const password = "abc123"
        signInWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(`${user.email} has logged in.`)

            /*
            checkLoginStatus()
            .then((result) => {
                console.log('I indeed logged in: ', result)
            })
            .catch((error) => {
                console.log('Auth failed: ',error)
            })*/
            navigate('/profile')
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message

            console.log(`An error occurred: ${errorCode} with ${errorMessage}`);
        })

        console.log('Logged in.');
    }

    return (
        <div className="flex m-4">
            <button
            className="bg-blue-300 border-2 border-blue-500 mx-2 px-4 rounded-md font-bold 
            text-white hover:text-red-500"
            onClick={() => handleLogin()}
            >Login</button>

            <p>Already have an account? Click <Link to='/signup'>here</Link></p>

            {/*myState ? 'true' : 'false'*/}
        </div>
    )
}


export default Login