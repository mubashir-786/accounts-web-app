
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDWPxFSRDi_YvNrNjI1DmjklyTT6iN1yrY",
    authDomain: "tissueweb-f04ae.firebaseapp.com",
    projectId: "tissueweb-f04ae",
    storageBucket: "tissueweb-f04ae.appspot.com",
    messagingSenderId: "358880106852",
    appId: "1:358880106852:web:d920b2bcd1b52807c38271"
};

initializeApp(firebaseConfig);
const auth = getAuth()
const db = getFirestore()
const storage = getStorage();

export async function firebaseLogin(email: string, password: string) {
    const user = await signInWithEmailAndPassword(auth, email, password)
    alert('Successfully LoggedIn')
    return user
}


export async function firebaseAddProduct(data: any, image: any) {
    const urls: any = []
    // for (let i = 0; i < image.length; i++) {
    const storageRef = ref(storage, `/products/${image.name}`);
    const response = await uploadBytes(storageRef, image)
    const url = await getDownloadURL(response.ref)
    urls.push(url)
    // }
    try {
        await addDoc(collection(db, "products"), {
            ...data,
            image: url

        })
        alert('Successfully Added')
    } catch (e: any) {
        alert(e.message)

    }
}