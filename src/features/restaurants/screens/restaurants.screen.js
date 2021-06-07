import React, {useState} from 'react';
import {StatusBar} from 'react-native';
import styled from 'styled-components/native';
import {Searchbar} from 'react-native-paper';

import {RestaurantInfoCard} from '../components/restaurant-info-card.component';

const RestaurantScreenView = styled.SafeAreaView`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px;`};
  background-color: ${({theme}) => theme.colors.bg.secondary};
`;

const RestaurantSearchView = styled.View`
  padding: ${({theme}) => theme.space[3]};
`;

const RestaurantListView = styled.View`
  padding: ${({theme}) => theme.space[3]};
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
