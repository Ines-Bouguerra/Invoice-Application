import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBfpiQgcZPvHqJeNlkGf-2FwKU_A49HKu0",
  authDomain: "invoice-application-23.firebaseapp.com",
  projectId: "invoice-application-23",
  storageBucket: "invoice-application-23.appspot.com",
  messagingSenderId: "729029434266",
  appId: "1:729029434266:web:b9192f7ebbcd3750d47823",
};

initializeApp(firebaseConfig);
const db = getFirestore();

export default db;
