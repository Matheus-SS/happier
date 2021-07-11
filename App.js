import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import * as firebase from 'firebase';
import Routes from './src/routes';
import { AuthProvider } from './src/helpers/AuthProvider';

const firebaseConfig = {
  apiKey: "AIzaSyChbTnLTden9QWZVAxa7gFGa0Eqsf1ZevA",
  authDomain: "testskill-e4203.firebaseapp.com",
  projectId: "testskill-e4203",
  storageBucket: "testskill-e4203.appspot.com",
  messagingSenderId: "697119814038",
  appId: "1:697119814038:web:ffcb7a3e6a3dd57d056db7",
  measurementId: "G-ZWHYQQT5T3"
};
// Initialize Firebase
if(firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}

export default App;

