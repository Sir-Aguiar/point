import { initializeApp } from "firebase/app";
import { getFirestore, initializeFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCFfU2sKAF8JbnTJngfL-laeFWmf5KN0O0",
  authDomain: "point-872fe.firebaseapp.com",
  projectId: "point-872fe",
  storageBucket: "point-872fe.appspot.com",
  messagingSenderId: "981145265137",
  appId: "1:981145265137:web:76977135c67c0e16b2da50",
  measurementId: "G-Q1CWT001ND",
};

const firebase = initializeApp(firebaseConfig);
const firestore = initializeFirestore(firebase, {
  experimentalForceLongPolling: true,
});

export { firestore };
