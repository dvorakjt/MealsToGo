import React, {useState} from 'react';
import {StatusBar} from 'react-native';
import styled from 'styled-components/native';
import {Searchbar} from 'react-native-paper';

import {RestaurantInfoCard} from '../components/restaurant-info-card.component';

const RestaurantScreenView = styled.SafeAreaView`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px;`}
`;

const RestaurantSearchView = styled.View`
  padding: 16px;
`;

const RestaurantListView = styled.View`
  padding: 16px;
  background-color: blue;
  flex: 1;
`;

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <RestaurantScreenView>
      <RestaurantSearchView>
        <Searchbar
          placeholder="Find a restaurant..."
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </RestaurantSearchView>
      <RestaurantListView>
        <RestaurantInfoCard />
      </RestaurantListView>
    </RestaurantScreenView>
  );
};
