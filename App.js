import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar, View, Text} from 'react-native';
import * as firebase from 'firebase';

import {ThemeProvider} from 'styled-components/native';
import {theme} from './src/infrastructure/theme';

import {AuthenticationContextProvider} from './src/services/authentication/authentication.context';

import {Navigation} from './src/infrastructure/navigation';

const firebaseConfig = {
  //config information goes here
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor="tomato"
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
