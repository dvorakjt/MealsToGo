import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar, View, Text} from 'react-native';
import {ThemeProvider} from 'styled-components/native';

import {theme} from './src/infrastructure/theme';
import {RestaurantsContextProvider} from './src/services/restaurants/restaurants.context';
import {LocationContextProvider} from './src/services/location/location.context';
import {FavoritesContextProvider} from './src/services/favorites/favorites.context';

import {Navigation} from './src/infrastructure/navigation';

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
        <FavoritesContextProvider>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <Navigation />
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </FavoritesContextProvider>
      </ThemeProvider>
    </>
  );
}
