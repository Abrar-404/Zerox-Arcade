// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC_T6Srv17Ube8OEJl5KLl-GrxoxcZsh5o',
  authDomain: 'zerox-arcade.firebaseapp.com',
  projectId: 'zerox-arcade',
  storageBucket: 'zerox-arcade.appspot.com',
  messagingSenderId: '722656325700',
  appId: '1:722656325700:web:60c3ba46b36fbd69ff8c11',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
