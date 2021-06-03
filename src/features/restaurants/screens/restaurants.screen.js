import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {Searchbar} from 'react-native-paper';

import {RestaurantInfo} from '../components/restaurant-info.component';

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <>
      <View style={styles.search}>
        <Searchbar
          placeholder="Find a restaurant..."
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>
      <View style={styles.list}>
        <RestaurantInfo />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  search: {
    padding: 16,
  },
  list: {
    padding: 16,
    backgroundColor: 'blue',
    flex: 1,
  },
});
