import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD2SU2a4ebznulKb9yRmRuPalRkRK1mQLg",
  authDomain: "instagram-clone-project-f1d2c.firebaseapp.com",
  projectId: "instagram-clone-project-f1d2c",
  storageBucket: "instagram-clone-project-f1d2c.appspot.com",
  messagingSenderId: "21412407177",
  appId: "1:21412407177:web:af4a891ffbf6b9eaf1a358"
};


const app = initializeApp(firebaseConfig);
export const auth=getAuth();