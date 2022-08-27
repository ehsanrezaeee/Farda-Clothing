import { initializeApp } from 'firebase/app';
import { 
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged } from 'firebase/auth';

import { getFirestore, 
  doc, 
  getDoc, 
  setDoc, 
  collection, 
  writeBatch,
  query,
  getDocs,
} from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDDFvoL3zzNiklgeJztV8U_0C9D_w8OkBM",
  authDomain: "farda-clothing-db.firebaseapp.com",
  projectId: "farda-clothing-db",
  storageBucket: "farda-clothing-db.appspot.com",
  messagingSenderId: "790896575304",
  appId: "1:790896575304:web:3f54ec9b5488e5e29ba97d",
  measurementId: "G-J32S9K2QHJ"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  propmt: "select_account"
});

export const auth = getAuth();
export const signinwithgooglepopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const addCollectionAndDocuments = async (collectionkey, objectsToAdd) => {
  const collectionRef = collection(db, collectionkey);
  const batch = writeBatch(db);


  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object)
  });


  await batch.commit();
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data()
    acc[title.toLowerCase()] = items;
    return acc;
  }, {})

  return categoryMap;
}


export const createUserDocumentFromAuth = async (userAuth, additionalInformation={}) => {
  const UserDocRef = doc(db, 'user', userAuth.uid)

  const userSnapshot = await getDoc(UserDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const CreatedAt = new Date();

    try {
      await setDoc(UserDocRef, {
        displayName,
        email,
        CreatedAt,
        ...additionalInformation,
      })

    } catch (error) {
      console.log('error creating user', error.message)
    }
  }



  return UserDocRef;
};


export const CreateAuthUserwithEmailandPass = async (email, password) => {
  if (!email || !password) return;


  return await createUserWithEmailAndPassword(auth, email, password)
};

export const signinAuthUserwithEmailandPass = async (email, password) => {
  if (!email || !password) return;


  return await signInWithEmailAndPassword(auth, email, password)
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)
