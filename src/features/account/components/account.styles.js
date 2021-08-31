import React from 'react';
import styled from 'styled-components/native';
import {colors} from '../../../infrastructure/theme/colors';
import {Button, TextInput} from 'react-native-paper';

export const AccountBackgroundImage = styled.ImageBackground.attrs({
  source: require('../../../../assets/images/FAST_FOOD.png'),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AccountCover = styled.View`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.6);
`;

export const AccountContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  padding: ${({theme}) => theme.space[4]};
`;

export const AuthButton = styled(Button).attrs({
  color: '#FF5555',
  mode: 'contained',
})`
  padding: ${({theme}) => theme.space[2]};
`;

export const AuthTextInput = styled(TextInput).attrs({
  mode: 'outlined',
  outlineColor: '#FF5555',
  underlineColor: '#FF5555',
})`
  width: 300px;
`;

export const ErrorContainer = styled.View`
  max-width: 300px;
  align-items: center;
  align-self: center;
  margin-top: ${({theme}) => theme.space[1]};
`;

export const AnimationWrapper = styled.View`
  width: 100%;
  height: 40%;
  position: absolute;
  top: 30px;
  padding: ${({theme}) => theme.space[2]};
`;
