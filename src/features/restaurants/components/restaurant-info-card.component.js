import React from 'react';
import styled from 'styled-components/native';
import {Card} from 'react-native-paper';

const RestaurantCard = styled(Card)`
  background-color: white;
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: 20px;
  background-color: white;
`;

const Title = styled.Text`
  padding: 16px;
  color: red;
`;

export const RestaurantInfoCard = ({restaurant = {}}) => {
  const {
    name = 'Some Restaurant',
    icon,
    photos = [
      'https://i2.wp.com/seonkyounglongest.com/wp-content/uploads/2019/10/Dan-Dan-Noodles-11.jpg?fit=2000%2C1333&ssl=1',
    ],
    address = '100 Some Random Street, Philadelphia, PA',
    isOpenNow = true,
    rating = 5,
    isClosedTemporarily = false,
  } = restaurant;

  return (
    <RestaurantCard title={name}>
      <RestaurantCardCover source={{uri: photos[0]}} />
      <Title>{name}</Title>
    </RestaurantCard>
  );
};
