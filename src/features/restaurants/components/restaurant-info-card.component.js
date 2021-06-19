import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';
import {Card} from 'react-native-paper';
import {SvgXml} from 'react-native-svg';

import {Spacer} from '../../../components/spacers/spacer.component';

import star from '../../../../assets/star';
import open from '../../../../assets/open';

const Section = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const Rating = styled.View`
  flex-direction: row;
  padding-top: ${({theme}) => theme.space[1]};
  padding-bottom: ${({theme}) => theme.space[1]};
`;

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
    isOpenNow = false,
    rating = 5,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.round(rating)));

  return (
    <RestaurantCard title={name}>
      <RestaurantCardCover source={{uri: photos[0]}} />
      <Info>
        <Title>{name}</Title>
        <Spacer position="top" size="large">
          <Section>
            <Rating>
              {ratingArray.map((el, index) => (
                <SvgXml xml={star} width={20} height={20} key={String(index)} />
              ))}
            </Rating>
            {isOpenNow ? (
              <SvgXml xml={open} width={20} height={20} />
            ) : isClosedTemporarily ? (
              <Text variant="label" style={{color: 'red'}}>
                CLOSED TEMPORARILY
              </Text>
            ) : null}
          </Section>
        </Spacer>
        <Section>
          <Address>{address}</Address>
          <Text>Type Icon</Text>
        </Section>
      </Info>
    </RestaurantCard>
  );
};
