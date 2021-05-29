import React from 'react';
import { View, SafeAreaView, Text, StyleSheet, Platform } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container(Platform)}>
      <View>
        <Text>here we will build a search bar</Text>
      </View>
      <View>
        <Text>here we will build search results</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: ({ OS }) => ({
    flex: 1,
    marginTop: OS === 'android' ? 10 : 0,
    backgroundColor: OS === 'android' ? 'blue' : 'red'
  })
});
