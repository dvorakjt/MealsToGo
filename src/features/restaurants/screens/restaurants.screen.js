import React, {useState, useContext} from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {ActivityIndicator, Colors} from 'react-native-paper';

import {RestaurantInfoCard} from '../components/restaurant-info-card.component';
import {Search} from '../components/search.component';
import {SafeArea} from '../../../components/utility/safe-area.component';
import {Spacer} from '../../../components/spacers/spacer.component';
import {FavoritesBar} from '../../../components/favorites/favorites-bar.component.js';

import {RestaurantList} from './restaurant-screen.styles';

import {RestaurantsContext} from '../../../services/restaurants/restaurants.context';
import {FavoritesContext} from '../../../services/favorites/favorites.context';

export const RestaurantsScreen = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = query => setSearchQuery(query);

  const {isLoading, restaurants, error} = useContext(RestaurantsContext);

  const [isToggled, setIsToggled] = useState(false);
  const {favorites} = useContext(FavoritesContext);

  const Loading = styled(ActivityIndicator)`
    margin-left: -25px;
  `;

  const LoadingContainer = styled.View`
    position: absolute;
    top: 50%;
    left: 50%;
  `;

  return (
    <SafeArea>
      <Search
        isFavoritesToggled={isToggled}
        onFavoritesToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavoritesBar favorites={favorites} onNavigate={navigation.navigate} />
      )}
      {isLoading ? (
        <LoadingContainer>
          <Loading animating={true} size={50} color={Colors.red800} />
        </LoadingContainer>
      ) : (
        <RestaurantList
          data={restaurants}
          renderItem={({item}) => (
            <Spacer position="bottom" size="large">
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Restaurant Details', {restaurant: item});
                }}>
                <RestaurantInfoCard restaurant={item} />
              </TouchableOpacity>
            </Spacer>
          )}
          keyExtractor={item => item.name}
        />
      )}
    </SafeArea>
  );
};
