import React, {
  useState,
  createContext,
  useContext,
  useEffect,
  useMemo,
} from 'react';

import {restaurantRequest, restaurantsTransform} from './restaurants.service';
import {LocationContext} from '../location/location.context';

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({children}) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const {location} = useContext(LocationContext);

  const retrieveRestaurants = loc => {
    setIsLoading(true);
    setRestaurants([]);

    restaurantRequest(loc)
      .then(restaurantsTransform)
      .then(results => {
        setError(null);
        setIsLoading(false);
        setRestaurants(results);
      })
      .catch(e => {
        setError(e);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (location) {
      const locationString = `${location.lat},${location.lng}`;
      retrieveRestaurants(locationString);
    }
  }, [location]);

  return (
    <RestaurantsContext.Provider
      value={{restaurants: restaurants, isLoading, error}}>
      {children}
    </RestaurantsContext.Provider>
  );
};
