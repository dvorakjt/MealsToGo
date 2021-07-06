import React, {useState, useContext} from 'react';
import {Searchbar} from 'react-native-paper';

import {RestaurantInfoCard} from '../components/restaurant-info-card.component';
import {SafeArea} from '../../../components/utility/safe-area.component';
import {Spacer} from '../../../components/spacers/spacer.component';

import {RestaurantSearchView, RestaurantList} from './restaurant-screen.styles';

import {RestaurantsContext} from '../../../services/restaurants/restaurants.context';

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = query => setSearchQuery(query);

  const restaurantsContext = useContext(RestaurantsContext);
  console.log(restaurantsContext);

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
        data={restaurantsContext.restaurants}
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
