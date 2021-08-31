import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {StatusBar, View, Text} from 'react-native';
import * as firebase from 'firebase';
import SplashScreen from 'react-native-splash-screen';

import {ThemeProvider} from 'styled-components/native';
import {theme} from './src/infrastructure/theme';

import {AuthenticationContextProvider} from './src/services/authentication/authentication.context';

import {Navigation} from './src/infrastructure/navigation';

const firebaseConfig = {};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor="#FF5555"
        barStyle={'default'}
        showHideTransition={'slide'}
        hidden={false}
      />
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
    </>
  );
}
