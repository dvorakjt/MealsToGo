import React from 'react';
import {StatusBar} from 'react-native';

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
      <RestaurantsScreen />
    </>
  );
}
