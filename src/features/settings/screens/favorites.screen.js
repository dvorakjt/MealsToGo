import React, {useContext} from 'react';
import {TouchableOpacity} from 'react-native';
import {FavoritesList} from './favorites-screen.styles';
import styled from 'styled-components/native';
import {SafeArea} from '../../../components/utility/safe-area.component';
import {Spacer} from '../../../components/spacers/spacer.component';
import {Text} from '../../../components/typography/text.component';
import {FavoriteRestaurantCard} from '../components/favorite-restaurant-card.component';
import {FavoritesContext} from '../../../services/favorites/favorites.context';

const TextWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const FavoritesScreen = ({navigation}) => {
  const {favorites} = useContext(FavoritesContext);

  return (
    <SafeArea>
      {favorites.length ? (
        <FavoritesList
          data={favorites}
          renderItem={({item}) => (
            <Spacer position="bottom" size="large">
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Restaurant Details', {restaurant: item});
                }}>
                <FavoriteRestaurantCard restaurant={item} />
              </TouchableOpacity>
            </Spacer>
          )}
          keyExtractor={item => item.name}
        />
      ) : (
        <TextWrapper>
          <Text variant="label">Add favorites to view them here.</Text>
        </TextWrapper>
      )}
    </SafeArea>
  );
};
