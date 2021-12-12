import { initializeApp } from "firebase/app";
import { FacebookAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyClAbtGTZYaVZWlbzsxD2Ac2nZmmoIexI8",
  authDomain: "gapo-clone.firebaseapp.com",
  projectId: "gapo-clone",
  storageBucket: "gapo-clone.appspot.com",
  messagingSenderId: "131982778439",
  appId: "1:131982778439:web:1834def93da7510fb2d162",
};

export const app = initializeApp(firebaseConfig);
export const provider = new FacebookAuthProvider();
