import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmmyg1LVB3fhDaSdCijLrHT32LWNc3MWY",
  authDomain: "e-learning-51184.firebaseapp.com",
  projectId: "e-learning-51184",
  storageBucket: "e-learning-51184.appspot.com",
  messagingSenderId: "772232251524",
  appId: "1:772232251524:web:c0dfad2785872d701d5ad1",
  measurementId: "G-MQTFCWD3WZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);