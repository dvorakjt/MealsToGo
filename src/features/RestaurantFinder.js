import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {Searchbar} from 'react-native-paper';

export const RestaurantFinder = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <>
      <View style={styles.searchBarView}>
        <Searchbar
          placeholder="Find a restarant..."
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>
      <View style={styles.searchResults}>
        <Text>list</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  searchBarView: {
    padding: 16,
  },
  searchResults: {
    padding: 16,
    backgroundColor: 'blue',
    flex: 1,
  },
});
