import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // লগইনের জন্য
import { getFirestore } from "firebase/firestore"; // ডাটাবেসের জন্য

// আপনার নতুন প্রজেক্টের কনফিগ
const firebaseConfig = {
  apiKey: "AIzaSyA0qWZ5wFfKIN57yGP2TPQXlML1gJ_Mb1g",
  authDomain: "sweet-cakery-c8025.firebaseapp.com",
  projectId: "sweet-cakery-c8025",
  storageBucket: "sweet-cakery-c8025.firebasestorage.app",
  messagingSenderId: "624324990028",
  appId: "1:624324990028:web:933ee37debe7e41282d0e9",
};

// অ্যাপ ইনিশিয়লাইজ করা
const app = initializeApp(firebaseConfig);

// এক্সপোর্ট করা যাতে অন্য ফাইলে ব্যবহার করা যায়
export const auth = getAuth(app);
export const db = getFirestore(app);
