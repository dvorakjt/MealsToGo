import React from 'react';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components/native';

import {theme} from './src/infrastructure/theme';
import {RestaurantsScreen} from './src/features/restaurants/screens/restaurants.screen';

export default function App() {
  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor="#61dafb"
        barStyle={'default'}
        showHideTransition={'slide'}
        hidden={false}
      />
      <ThemeProvider theme={theme}>
        <RestaurantsScreen />
      </ThemeProvider>
    </>
  );
}
