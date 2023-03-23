import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
// };
const firebaseConfig = {
  apiKey: "AIzaSyBneELbbfcY0aiOkS5VUCLACW69OHeSe0g",
  authDomain: "hero-rider-4448d.firebaseapp.com",
  projectId: "hero-rider-4448d",
  storageBucket: "hero-rider-4448d.appspot.com",
  messagingSenderId: "746319730938",
  appId: "1:746319730938:web:1936a3f6074f004dd4d143"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
