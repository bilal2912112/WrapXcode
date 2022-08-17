import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAKBkMD2tAmTDKjnQiQeqZsUfmnU2RGm8w",
  authDomain: "wrapxcode-blog.firebaseapp.com",
  projectId: "wrapxcode-blog",
  storageBucket: "wrapxcode-blog.appspot.com",
  messagingSenderId: "632941865492",
  appId: "1:632941865492:web:a05c482112a491c6739501",
};
const app = initializeApp(firebaseConfig);
export const sotrage = getStorage(app);
export const db = getFirestore(app);
