// init.js
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAgEAaZtccJ8JPDBYwgh8WjDXURoKxdcPk',
  authDomain: 'week7-yingquan.firebaseapp.com',
  projectId: 'week7-yingquan',
  storageBucket: 'week7-yingquan.firebasestorage.app',
  messagingSenderId: '187986047296',
  appId: '1:187986047296:web:4524bc4868d6cf63bd0aa5',
}

// Initialize Firebase
initializeApp(firebaseConfig)
const db = getFirestore()
export default db
