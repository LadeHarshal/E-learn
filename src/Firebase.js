import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


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

const auth = getAuth(app);


export { app };