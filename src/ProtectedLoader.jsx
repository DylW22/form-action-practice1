import verifyAuth from "./verifyAuth";
import { redirect } from "react-router-dom";
import { verifyAuth2 } from "./verifyAuth";
import { useRevalidator } from "react-router-dom";
import { useEffect } from "react";


export const ProtectedLoader = () => {
    //const auth = verifyAuth();
 // then/catch method
    /*
    const auth = () => {
     return verifyAuth2()
        .then((result) => {
            console.log(result)
           
        })
        .catch((error) => {
            console.error("An error occurred: ", error)
        })
    }
    */
// try/catch async/await

    const auth = async () => {
     try {
            const result_1 = await verifyAuth2();
            console.log(result_1);
        } catch (error) {
            console.error("An error occurred: ", error);
        }
    }


    



    if(!auth){
        console.log('Going to redirect')
        return redirect('/login')
    }else{
        console.log('No need for redirect')
    }
    return auth;
}