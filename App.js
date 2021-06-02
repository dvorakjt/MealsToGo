import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';

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
      <SafeAreaView style={styles.container}>
        <RestaurantsScreen />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});
