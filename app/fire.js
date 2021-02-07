import Firebase from "firebase";


   const FirebaseConfig = {
        apiKey: "AIzaSyC0lFPB5gsY5knXyE3-qX3414-uqDtreWA",
        authDomain: "pledgeapp-4b882.firebaseapp.com",
        databaseURL: "https://pledgeapp-4b882-default-rtdb.firebaseio.com",
        projectId: "pledgeapp-4b882",
        storageBucket: "pledgeapp-4b882.appspot.com",
        messagingSenderId: "117628739723",
        appId: "1:117628739723:web:35232093b1b7f97fbd748e"
    };

    const app = Firebase.initializeApp(FirebaseConfig);
export const db = app.database();