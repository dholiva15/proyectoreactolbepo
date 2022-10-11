
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAxGJSudsMNA_k1irWCH8hH1yB-7VaImIA",
  authDomain: "olbepo-f3dc8.firebaseapp.com",
  projectId: "olbepo-f3dc8",
  storageBucket: "olbepo-f3dc8.appspot.com",
  messagingSenderId: "642316228138",
  appId: "1:642316228138:web:ba56405e009c93d4445553"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)