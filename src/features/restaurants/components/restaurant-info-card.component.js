import React from 'react';
import styled from 'styled-components/native';
import {Card} from 'react-native-paper';

const RestaurantCard = styled(Card)`
  background-color: ${({theme}) =>
    theme.colors.bg.primary}; //destructure props to grab theme
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${({theme}) => theme.space[3]};
  background-color: ${({theme}) => theme.colors.bg.primary};
`;

const Info = styled.View`
  padding: ${({theme}) => theme.space[3]};
`;

const Title = styled.Text`
  color: ${({theme}) => theme.colors.ui.primary};
  font-family: ${({theme}) => theme.fonts.heading};
  font-size: ${({theme}) => theme.fontSizes.body};
`;

const Address = styled.Text`
  color: ${({theme}) => theme.colors.ui.primary};
  font-family: ${({theme}) => theme.fonts.body};
  font-size: ${({theme}) => theme.fontSizes.caption};
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
      <Info>
        <Title>{name}</Title>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
