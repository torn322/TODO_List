import firebase from 'firebase'




const firebaseConfig = {
    apiKey: "AIzaSyBFx4aIJ2K0qvW1D9MX5j3HPGMUHJ3euMk",
    authDomain: "todo-4e067.firebaseapp.com",
    databaseURL: "https://todo-4e067.firebaseio.com",
    projectId: "todo-4e067",
    storageBucket: "todo-4e067.appspot.com",
    messagingSenderId: "742476939364",
    appId: "1:742476939364:web:5109d18756d088dad59f71"
  };


  firebase.initializeApp(firebaseConfig)

  export default firebase