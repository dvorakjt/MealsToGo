import React, {useContext} from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {FavoritesContext} from '../../services/favorites/favorites.context';

const FavoriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 21px;
  right: 22.5px;
  z-index: 9;
`;

export const Favorite = ({restaurant}) => {
  const {favorites, addToFavorites, removeFromFavorites} =
    useContext(FavoritesContext);

  let isFavorite = false;

  if (favorites.length > 0) {
    isFavorite = favorites.find(r => r.placeId === restaurant.placeId);
  }

  return (
    <FavoriteButton
      onPress={() => {
        !isFavorite
          ? addToFavorites(restaurant)
          : removeFromFavorites(restaurant);
      }}>
      <Ionicons
        name={isFavorite ? 'heart' : 'heart-outline'}
        color={isFavorite ? 'red' : 'white'}
        size={24}
      />
    </FavoriteButton>
  );
};
