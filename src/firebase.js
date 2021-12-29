//In the video, an older version of firebse was used. but we've 
//used the modular version. hence the syntax and code might not match with the 
//code in the video


import  firebase from "firebase/compat/app";                
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDjRD4FyJdPHI1Q9vdfOTiAfJ56duaK9E4",
  authDomain: "fir-44ef9.firebaseapp.com",
  projectId: "fir-44ef9",
  storageBucket: "fir-44ef9.appspot.com",
  messagingSenderId: "90517233046",
  appId: "1:90517233046:web:b97f7660b1df3d2e4711b7",
  measurementId: "G-LVRZ73DC8Y"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig); 

const db =  getFirestore(firebaseApp);

const auth = getAuth();

export {db, auth};