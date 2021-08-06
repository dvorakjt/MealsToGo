import React, {useContext, useState, useEffect} from 'react';
import styled from 'styled-components/native';
import {Searchbar} from 'react-native-paper';

import {LocationContext} from '../../../services/location/location.context';

const SearchContainer = styled.View`
  padding: ${({theme}) => theme.space[3]};
  position: absolute;
  z-index: 999;
  top: 0px;
  background-color: transparent;
  width: 100%;
`;

export const Search = () => {
  const {keyword, search} = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  //anytime the global keyword is updated, update the local search keyword
  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search for a location..."
        icon="map"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={text => {
          setSearchKeyword(text);
        }}
      />
    </SearchContainer>
  );
};
