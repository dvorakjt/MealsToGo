import React from 'react';
import {Spacer} from '../../../components/spacers/spacer.component';
import {Text} from '../../../components/typography/text.component';
import {
  AccountBackgroundImage,
  AccountCover,
  AccountContainer,
  AuthButton,
  AnimationWrapper,
} from '../components/account.styles';
import LottieView from 'lottie-react-native';

export const AccountScreen = ({navigation}) => {
  return (
    <AccountBackgroundImage>
      <AccountCover />
      <AnimationWrapper>
        <LottieView
          key="animation"
          autoPlay
          loop
          resizeMode="cover"
          source={require('../../../../assets/watermelon.json')}
        />
      </AnimationWrapper>
      <Text variant="h4">Meals To Go</Text>
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
          icon="email"
          onPress={() => {
            navigation.navigate('Register');
          }}>
          SIGN UP
        </AuthButton>
      </AccountContainer>
    </AccountBackgroundImage>
  );
};
