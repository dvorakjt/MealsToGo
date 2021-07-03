import {FlatList} from 'react-native';
import styled from 'styled-components/native';

export const RestaurantSearchView = styled.View`
  padding: ${({theme}) => theme.space[3]};
`;

export const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;
