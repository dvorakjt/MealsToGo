import styled from 'styled-components/native';
import {Card} from 'react-native-paper';

import {Button} from 'react-native-paper';
import {colors} from '../../../infrastructure/theme/colors';

export const Icon = styled.Image`
  height: 15px;
  width: 15px;
`;

export const Section = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Rating = styled.View`
  flex-direction: row;
  padding-top: ${({theme}) => theme.space[1]};
  padding-bottom: ${({theme}) => theme.space[1]};
`;

export const RestaurantCard = styled(Card)`
  background-color: ${({theme}) => theme.colors.bg.primary};
  width: 95%;
  align-self: center;
`;

export const RestaurantCardCover = styled(Card.Cover)`
  padding: ${({theme}) => theme.space[3]};
  background-color: ${({theme}) => theme.colors.bg.primary};
`;

export const Info = styled.View`
  padding: ${({theme}) => theme.space[3]};
`;

export const Address = styled.Text`
  color: ${({theme}) => theme.colors.ui.primary};
  font-family: ${({theme}) => theme.fonts.body};
  font-size: ${({theme}) => theme.fontSizes.caption};
`;

export const OrderButton = styled(Button).attrs({
  color: colors.brand.primary,
})`
  padding: ${({theme}) => theme.space[2]};
  width: 80%;
  align-self: center;
`;
