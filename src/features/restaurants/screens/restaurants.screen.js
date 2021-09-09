import React, {useState, useContext} from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {ActivityIndicator, Colors} from 'react-native-paper';

import {RestaurantInfoCard} from '../components/restaurant-info-card.component';
import {Search} from '../components/search.component';
import {SafeArea} from '../../../components/utility/safe-area.component';
import {Spacer} from '../../../components/spacers/spacer.component';
import {FavoritesBar} from '../../../components/favorites/favorites-bar.component.js';
import {Text} from '../../../components/typography/text.component';

import {RestaurantList} from './restaurant-screen.styles';

import {LocationContext} from '../../../services/location/location.context';
import {RestaurantsContext} from '../../../services/restaurants/restaurants.context';
import {FavoritesContext} from '../../../services/favorites/favorites.context';

import {FadeInView} from '../../../components/animations/fade.animation';

export const RestaurantsScreen = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = query => setSearchQuery(query);

  const {error: locationError} = useContext(LocationContext);
  const {isLoading, restaurants, error} = useContext(RestaurantsContext);
  const hasError = !!locationError || !!error;

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
      ) : hasError ? (
        <Spacer position="left" size="large">
          <Text variant="error">There was a problem loading the data.</Text>
        </Spacer>
      ) : (
        <RestaurantList
          data={restaurants}
          renderItem={({item}) => (
            <Spacer position="bottom" size="large">
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Restaurant Details', {restaurant: item});
                }}>
                <FadeInView>
                  <RestaurantInfoCard restaurant={item} />
                </FadeInView>
              </TouchableOpacity>
            </Spacer>
          )}
          keyExtractor={item => item.name}
        />
      )}
    </SafeArea>
  );
};
