import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB-tHHisMDGXhac2wGyfegmheE58qPzDfI",
  authDomain: "food-delivery-app-6aae2.firebaseapp.com",
  databaseURL: "https://food-delivery-app-6aae2-default-rtdb.firebaseio.com",
  projectId: "food-delivery-app-6aae2",
  storageBucket: "food-delivery-app-6aae2.appspot.com",
  messagingSenderId: "1061332330349",
  appId: "1:1061332330349:web:86e4fd4fbbf5ffb59d9c64",
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { app, firestore, storage, auth };
