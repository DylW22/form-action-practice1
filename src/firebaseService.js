// firebaseService.js
import { getStorage, ref, uploadBytes, getDownloadURL as firebaseGetDownloadURL, listAll } from 'firebase/storage';
import { storage } from './firebaseConfig';
import { getAuth, onAuthStateChanged  } from "firebase/auth";


export const checkLoginStatus = () => {
  return new Promise((resolve, reject) => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      // Unsubscribe first to avoid memory leaks
      unsubscribe();
      if (authUser) {
        //console.log('Logged in!');
        resolve(true);
      } else {
        //console.log('Not logged in.');
        resolve(false);
        
      }
    }, (error) => {
      console.log("Error: ", error)
      reject(error)
    }
    );
  });
};


