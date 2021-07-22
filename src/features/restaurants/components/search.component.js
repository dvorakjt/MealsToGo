import React from 'react';
import styled from 'styled-components/native';
import {Searchbar} from 'react-native-paper';

const SearchContainer = styled.View`
  padding: ${({theme}) => theme.space[3]};
`;

export const Search = () => {
  return (
    <SearchContainer>
      <Searchbar placeholder="Find a restaurant..." />
    </SearchContainer>
  );
};

//onChangeText={}
//value={}
