import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAduV93u_Vcjhv8654aLsbuqdrabNAq0hw",
  authDomain: "netflix-56bf0.firebaseapp.com",
  projectId: "netflix-56bf0",
  storageBucket: "netflix-56bf0.appspot.com",
  messagingSenderId: "96310561484",
  appId: "1:96310561484:web:2bbfad979110ae4b071069",
};
const firebase = Firebase.initializeApp(config);
export { firebase };
