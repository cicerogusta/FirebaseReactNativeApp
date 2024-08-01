import firebase, {initializeApp} from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
let firebaseConfig = {
  apiKey: "AIzaSyA86vIReTsumAQ2E4IuvPR-NsjzTGXNUkw",
  authDomain: "noteapp-dee18.firebaseapp.com",
  databaseURL: "https://noteapp-dee18-default-rtdb.firebaseio.com",
  projectId: "noteapp-dee18",
  storageBucket: "noteapp-dee18.appspot.com",
  messagingSenderId: "464460554955",
  appId: "1:464460554955:web:f7d03c5f0971f3c4f5f14e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);


export default database