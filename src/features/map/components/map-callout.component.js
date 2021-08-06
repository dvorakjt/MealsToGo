import {rest} from 'lodash';
import React from 'react';
import styled from 'styled-components/native';

const CalloutView = styled.View`
  height: 100px;
  width: 100px;
`;

const CalloutText = styled.Text`
  color: ${({theme}) => theme.colors.ui.primary};
  font-family: ${({theme}) => theme.fonts.body};
  font-size: ${({theme}) => theme.fontSizes.caption};
`;

const CalloutImage = styled.Image`
  height: 50px;
  width: 50px;
`;

export const MapCallout = ({restaurant}) => {
  console.log(restaurant);
  return (
    <CalloutView>
      <CalloutImage
        source={{
          uri: restaurant.photos[0],
        }}
      />
      <CalloutText>{restaurant.name}</CalloutText>
    </CalloutView>
  );
};
