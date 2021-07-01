import React, {useState} from 'react';
import {FlatList} from 'react-native';
import styled from 'styled-components/native';
import {Searchbar} from 'react-native-paper';

import {RestaurantInfoCard} from '../components/restaurant-info-card.component';
import {Spacer} from '../../../components/spacers/spacer.component';

/*StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px;`*/

const RestaurantScreenView = styled.SafeAreaView`
  flex: 1;
  background-color: ${({theme}) => theme.colors.bg.secondary};
`;

const RestaurantSearchView = styled.View`
  padding: ${({theme}) => theme.space[3]};
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
      <FlatList
        data={[{name: '1'}, {name: '2'}, {name: '3'}, {name: '4'}, {name: '5'}]}
        renderItem={() => (
          <Spacer position="bottom" size="large">
            <RestaurantInfoCard />
          </Spacer>
        )}
        keyExtractor={item => item.name}
        contentContainerStyle={{padding: 16}}
      />
    </RestaurantScreenView>
  );
};
