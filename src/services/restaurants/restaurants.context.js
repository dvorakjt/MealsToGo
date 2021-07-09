import React, {useState, createContext, useEffect, useMemo} from 'react';
import {restaurantRequest, restaurantsTransform} from './restaurants.service';

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({children}) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const retrieveRestaurants = () => {
    setIsLoading(true);
    setTimeout(() => {
      restaurantRequest()
        .then(restaurantsTransform)
        .then(results => {
          setRestaurants(results);
          setIsLoading(false);
        })
        .catch(e => {
          setError(e);
          setIsLoading(false);
        });
    }, 2000);
  };

  useEffect(() => {
    retrieveRestaurants();
  }, []);

  return (
    <RestaurantsContext.Provider
      value={{restaurants: restaurants, isLoading, error}}>
      {children}
    </RestaurantsContext.Provider>
  );
};
