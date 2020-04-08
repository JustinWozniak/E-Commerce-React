import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyD11WZIBS_PvLPcQQjQYT6Qy-CnIRtI9uY",
    authDomain: "e-commerce-40ff4.firebaseapp.com",
    databaseURL: "https://e-commerce-40ff4.firebaseio.com",
    projectId: "e-commerce-40ff4",
    storageBucket: "e-commerce-40ff4.appspot.com",
    messagingSenderId: "982285476260",
    appId: "1:982285476260:web:1b0af33ebfb245f53f2131",
    measurementId: "G-4PMYX91BZ6"
};

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase