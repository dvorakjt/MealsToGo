import React, {createContext, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect} from 'react/cjs/react.development';

export const FavoritesContext = createContext();

export const FavoritesContextProvider = ({children}) => {
  const [favorites, setFavorites] = useState([]);

  const saveFavorites = async value => {
    try {
      const jsonFavorites = JSON.stringify(favorites);
      await AsyncStorage.setItem('@favorites', jsonFavorites);
    } catch (e) {
      console.log('error storing ', e);
    }
  };

  const loadFavorites = async () => {
    try {
      const value = await AsyncStorage.getItem('@favorites');
      if (value !== null) {
        setFavorites(JSON.parse(value));
      }
    } catch (e) {
      console.log('error loading ', e);
    }
  };

  const add = restaurant => {
    setFavorites([...favorites, restaurant]);
  };

  const remove = restaurant => {
    const newFavorites = favorites.filter(
      x => x.placeId !== restaurant.placeId,
    );
    setFavorites(newFavorites);
  };

  useEffect(() => {
    loadFavorites();
  }, []);

  useEffect(() => {
    saveFavorites(favorites);
  }, [favorites]);

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addToFavorites: add,
        removeFromFavorites: remove,
      }}>
      {children}
    </FavoritesContext.Provider>
  );
};
