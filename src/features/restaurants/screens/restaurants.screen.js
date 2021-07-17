import React, {useState, useContext} from 'react';
import {Searchbar, ActivityIndicator} from 'react-native-paper';

import {RestaurantInfoCard} from '../components/restaurant-info-card.component';
import {SafeArea} from '../../../components/utility/safe-area.component';
import {Spacer} from '../../../components/spacers/spacer.component';

import {RestaurantSearchView, RestaurantList} from './restaurant-screen.styles';

import {RestaurantsContext} from '../../../services/restaurants/restaurants.context';

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = query => setSearchQuery(query);

  const {isLoading, restaurants, error} = useContext(RestaurantsContext);

  return (
    <SafeArea>
      <RestaurantSearchView>
        <Searchbar
          placeholder="Find a restaurant..."
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </RestaurantSearchView>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <RestaurantList
          data={restaurants}
          renderItem={({item}) => (
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard restaurant={item} />
            </Spacer>
          )}
          keyExtractor={item => item.name}
        />
      )}
    </SafeArea>
  );
};
