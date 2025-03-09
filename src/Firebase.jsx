import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBxqWMy9JJaUxN9mIZ1mO6kaqkgfCc2a-I",
  authDomain: "portfolio-57711.firebaseapp.com",
  projectId: "portfolio-57711",
  storageBucket: "portfolio-57711.appspot.com",
  messagingSenderId: "994452829890",
  appId: "1:994452829890:web:2cf9b7e033c6557488ed5b",
  measurementId: "G-6V1Z6QKHTL",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
