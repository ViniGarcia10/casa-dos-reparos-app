import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDIKtnBNamfzEtXnFSwemUNCpFT7Url470',
  authDomain: 'viniix-base.firebaseapp.com',
  databaseURL: 'https://viniix-base.firebaseio.com',
  projectId: 'viniix-base',
  storageBucket: 'viniix-base.appspot.com',
  messagingSenderId: '659342653312',
  appId: '1:659342653312:web:2e4c2e6562de35bffa7365',
  measurementId: 'G-H3CB77KX1Q',
};

firebase.initializeApp(config);

export default firebase;
