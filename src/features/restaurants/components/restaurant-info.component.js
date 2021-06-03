import React from 'react';
import {Text} from 'react-native';
import {Card, Title, Paragraph} from 'react-native-paper';

export const RestaurantInfo = ({restaurant = {}}) => {
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
    <Card title={name}>
      <Card.Content>
        <Title>Card title</Title>
        <Paragraph>Card content</Paragraph>
      </Card.Content>
      <Card.Cover source={{uri: photos[0]}} />
    </Card>
  );
};
