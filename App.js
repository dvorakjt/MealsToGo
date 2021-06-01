import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';

import { RestaurantFinder } from './src/features/RestaurantFinder';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#61dafb"
        barStyle={'default'}
        showHideTransition={'slide'}
        hidden={false}
      />
      <RestaurantFinder />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight
  }
});
