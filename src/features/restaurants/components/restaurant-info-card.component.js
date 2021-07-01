import React from 'react';
import {SvgXml} from 'react-native-svg';

import {Spacer} from '../../../components/spacers/spacer.component';
import {Text} from '../../../components/typography/text.component';
import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Section,
  Rating,
  Icon,
  Address,
} from './restaurant-info-card.styles';

import star from '../../../../assets/star';
import open from '../../../../assets/open';

export const RestaurantInfoCard = ({restaurant = {}}) => {
  const {
    name = 'Some Restaurant',
    icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
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
        <Text variant="label">{name}</Text>
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
              <Text variant="error">CLOSED TEMPORARILY</Text>
            ) : null}
          </Section>
        </Spacer>
        <Section>
          <Address>{address}</Address>
          <Icon source={{ uri: icon}} />
        </Section>
      </Info>
    </RestaurantCard>
  );
};
