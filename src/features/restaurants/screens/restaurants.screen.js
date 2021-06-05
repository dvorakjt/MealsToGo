import React, {useState} from 'react';
import styled from 'styled-components/native';
import {Searchbar} from 'react-native-paper';

import {RestaurantInfoCard} from '../components/restaurant-info-card.component';

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
    <>
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
    </>
  );
};
