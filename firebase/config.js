import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
   apiKey: 'AIzaSyCtv88ABEvReaZRC4cvcK3pRQl7j7B1OiI',
   authDomain: 'yelp-camp-e978a.firebaseapp.com',
   projectId: 'yelp-camp-e978a',
   storageBucket: 'yelp-camp-e978a.appspot.com',
   messagingSenderId: '1038477616915',
   appId: '1:1038477616915:web:520d7f2782a68df29f1ce6',
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)
