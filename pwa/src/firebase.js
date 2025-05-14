import {initializeApp} from 'firebase/app'
import { getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
    apiKey: 'AIzaSyD7Cr1JUBvZwflMR6bnjsmkEd-xyZqFaIM',
    authDomain: 'trabalhobackoffice.firebaseapp.com',
    projectId: 'trabalhobackoffice',
    storageBucket: 'trabalhobackoffice.firebasestorage.app',
    messagingSenderId: '910651229271',
    appId: '1:910651229271:web:9da861429b988e41e58f12'
  }
  
  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app)
  const provider = new GoogleAuthProvider()
  
  export { auth, provider }