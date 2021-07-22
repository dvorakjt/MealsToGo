import React, {useState, useEffect} from 'react';
import {locationRequest, locationTransform} from './location.service';

export const LocationContext = React.createContext();

export const LocationContextProvider = ({children}) => {
  const [keyword, setKeyword] = useState('san francisco');
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSearch = searchTerm => {
    console.log(searchTerm);
    setIsLoading(true);
    setKeyword(searchTerm);
    if (!searchTerm.length) {
      return;
    }
    locationRequest(searchTerm.toLowerCase())
      .then(locationTransform)
      .then(result => {
        setIsLoading(false);
        setLocation(result);
        console.log(result);
      })
      .catch(err => {
        setIsLoading(false);
        setError(err);
      });
  };

  return (
    <LocationContext.Provider
      value={{
        isLoading,
        error,
        location,
        search: onSearch,
        keyword,
      }}>
      {children}
    </LocationContext.Provider>
  );
};
