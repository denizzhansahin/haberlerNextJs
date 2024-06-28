// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSdcDrNHROpePXyGgtXmI-V8gDKmNEEuQ",
  authDomain: "haberler-81678.firebaseapp.com",
  projectId: "haberler-81678",
  storageBucket: "haberler-81678.appspot.com",
  messagingSenderId: "73787319996",
  appId: "1:73787319996:web:d79ae581085c33ab4712b9",
  measurementId: "G-G0VWTHXW6M"
};

// Initialize Firebase
const app_firebase = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export default app_firebase