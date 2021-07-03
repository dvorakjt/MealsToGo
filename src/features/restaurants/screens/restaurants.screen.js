import React, {useState} from 'react';
import {Searchbar} from 'react-native-paper';

import {RestaurantInfoCard} from '../components/restaurant-info-card.component';
import {SafeArea} from '../../../components/utility/safe-area.component';
import {Spacer} from '../../../components/spacers/spacer.component';

import {RestaurantSearchView, RestaurantList} from './restaurant-screen.styles';

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <SafeArea>
      <RestaurantSearchView>
        <Searchbar
          placeholder="Find a restaurant..."
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </RestaurantSearchView>
      <RestaurantList
        data={[{name: '1'}, {name: '2'}, {name: '3'}, {name: '4'}, {name: '5'}]}
        renderItem={() => (
          <Spacer position="bottom" size="large">
            <RestaurantInfoCard />
          </Spacer>
        )}
        keyExtractor={item => item.name}
      />
    </SafeArea>
  );
};
