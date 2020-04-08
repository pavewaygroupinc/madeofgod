import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'
import 'firebase/firestore'
import 'firebase/functions'

const firebaseConfig = {
    apiKey: "AIzaSyDhRkiIlUfldIFQrD5lh9HWjl-IEnyBel0",
    authDomain: "kings-blog.firebaseapp.com",
    databaseURL: "https://kings-blog.firebaseio.com",
    projectId: "kings-blog",
    storageBucket: "kings-blog.appspot.com",
    messagingSenderId: "170231697899",
    appId: "1:170231697899:web:676d782edf01d7d3"
}


if (!firebaseConfig) {
    console.log('missing firebase.json config.')
}

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth()
export const db = firebase.database()
export const storage = firebase.storage()
export const firestore = firebase.firestore()
export const functions = firebase.functions()

export default firebase