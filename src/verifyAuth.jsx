import { checkLoginStatus } from "./firebaseService";
const verifyAuth = () => {
    const state = false;

    return state;
 }

 export default verifyAuth;



 export const verifyAuth2 = () => {
    return checkLoginStatus()
    .then((state) => {
        console.log("Am I logged in? ", state);
        return state;
    })
    .catch((error) => {
        console.log("An error occurred.. ", error)
        return false;
    })
   
 }

 