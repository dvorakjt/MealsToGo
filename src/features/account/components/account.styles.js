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
  background-color: rgba(255, 255, 255, 0.3);
`;

export const AccountContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  padding: ${({theme}) => theme.space[4]};
`;

export const AuthButton = styled(Button).attrs({
  color: 'tomato',
  mode: 'contained',
})`
  padding: ${({theme}) => theme.space[2]};
`;

export const AuthTextInput = styled(TextInput).attrs({
  mode: 'outlined',
  outlineColor: 'tomato',
  underlineColor: 'tomato',
})`
  width: 300px;
`;
