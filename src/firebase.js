// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup  } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSI46Zc6XogZi-O6kBnTIjyhwQ_rNGJAk",
  authDomain: "boardloginpage.firebaseapp.com",
  projectId: "boardloginpage",
  storageBucket: "boardloginpage.appspot.com",
  messagingSenderId: "618555826104",
  appId: "1:618555826104:web:0d90420d4a5d1493cff94d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export const signInWithGoogle = () => signInWithPopup(auth,provider)

// export const signInWithGoogle = () => {
//     signInWithPopup(auth,provider)
        // .then(res=>{
        //     const name = res.user.displayName
        //     const email = res.user.email
        //     const profilePic = res.user.photoURL

        //     localStorage.setItem('name',name)
        //     localStorage.setItem('email',email)
        //     localStorage.setItem('profilePic',profilePic)
        // })
        // .catch(err=>{
        //     console.error('error while signin',err)
        // })
// }