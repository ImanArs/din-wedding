import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/auth'; // Добавьте этот импорт

const firebaseConfig = {
    apiKey: 'AIzaSyCv3an0VanCW3ryYin-tqQEsGhjkMJw9nc',
    authDomain: 'fresh-rampart-397313.firebaseapp.com',
    projectId: 'fresh-rampart-397313',
    storageBucket: 'fresh-rampart-397313.appspot.com',
    messagingSenderId: '294439567071',
    appId: '1:294439567071:web:0d1659e3498e9bb45e736a',
    measurementId: 'G-ZXZWT0N1KE',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.database();
const auth = firebase.auth(); // Инициализируйте аутентификацию Firebase

export { database, auth };
