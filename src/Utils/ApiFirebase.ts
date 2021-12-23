// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import "firebase/database";
import { getDatabase, ref, onValue} from 'firebase/database'

import "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCacd7obHexhTTIRzg3jtD3_5kbvn6MrSY",
  authDomain: "portafolio-99104.firebaseapp.com",
  databaseURL: "https://portafolio-99104-default-rtdb.firebaseio.com",
  projectId: "portafolio-99104",
  storageBucket: "portafolio-99104.appspot.com",
  messagingSenderId: "529452792555",
  appId: "1:529452792555:web:bbf87ce2012cda349b9cae"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const database = getDatabase(firebase);
export{ firebase };
export {database};
const db = getDatabase();
export{db};
export const todosRef = ref(database, "todos");