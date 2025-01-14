import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDHSGgJvVqHROiEkcZxJhe5l1stom0bGcA",
    authDomain: "shared-image-918b6.firebaseapp.com",
    projectId: "shared-image-918b6",
    storageBucket: "shared-image-918b6.firebasestorage.app",
    messagingSenderId: "654296550832",
    appId: "1:654296550832:web:32728bdcbda5127ee19a75",
    measurementId: "G-8SYPYE0NVJ"
};

// Check if Firebase is already initialized
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Initialize Firebase services
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

// Export services
export { auth, firestore, storage };
