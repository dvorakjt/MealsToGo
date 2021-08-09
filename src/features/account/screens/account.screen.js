import React from 'react';
import {Spacer} from '../../../components/spacers/spacer.component';
import {
  AccountBackgroundImage,
  AccountCover,
  AccountContainer,
  AuthButton,
} from '../components/account.styles';

export const AccountScreen = ({navigation}) => {
  return (
    <AccountBackgroundImage>
      <AccountCover />
      <AccountContainer>
        <AuthButton
          icon="lock-open-outline"
          onPress={() => {
            navigation.navigate('Login');
          }}>
          LOGIN
        </AuthButton>
        <Spacer position="top" size="large" />
        <AuthButton
          onPress={() => {
            navigation.navigate('Login');
          }}>
          SIGN UP
        </AuthButton>
      </AccountContainer>
    </AccountBackgroundImage>
  );
};
