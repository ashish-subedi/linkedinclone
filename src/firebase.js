import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyCjmYDFv1XjEmKByBPYLslZH_5f3CgQp5E",
	authDomain: "linkedinclone-ca61f.firebaseapp.com",
	projectId: "linkedinclone-ca61f",
	storageBucket: "linkedinclone-ca61f.appspot.com",
	messagingSenderId: "874438846600",
	appId: "1:874438846600:web:8ece8e1f406bc2f65b973d",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
