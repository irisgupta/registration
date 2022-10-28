// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAadK2KrQAHwonqcMxwYQETatbNenOKRx8",
//   authDomain: "registration-assessment.firebaseapp.com",
//   projectId: "registration-assessment",
//   storageBucket: "registration-assessment.appspot.com",
//   messagingSenderId: "44762878324",
//   appId: "1:44762878324:web:8e94bd96085349d97f9c21",
//   measurementId: "G-H37F59BPJ0"
// };


// import firebase from "firebase/compat/app";
// import "firebase/compat/firestore";

// const firebaseConfig = {
//     apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//     authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
// };


// export default function initFirebase() {
//     if (!firebase.apps.length) {
//         const app = firebase.initializeApp(clientCredentials)
//         // const db = app.firestore()

//         console.log('Firebase was successfully init.')
//     }
// }



// const app = firebase.initializeApp(firebaseConfig)

// // Initialize Firebase
// // const app = initializeApp(firebaseConfig)
// // Initialize Cloud Firestore and get a reference to the service
// export const db = app.firestore()


import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAadK2KrQAHwonqcMxwYQETatbNenOKRx8",
    authDomain: "registration-assessment.firebaseapp.com",
    projectId: "registration-assessment",
    storageBucket: "registration-assessment.appspot.com",
    messagingSenderId: "44762878324",
    appId: "1:44762878324:web:8e94bd96085349d97f9c21",
    measurementId: "G-H37F59BPJ0"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };