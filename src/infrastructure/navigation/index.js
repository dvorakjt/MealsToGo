import React, {useContext, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthenticationContext} from '../../services/authentication/authentication.context';
import {AppNavigator} from './app.navigator';
import {AccountNavigator} from './account.navigator';
import SplashScreen from 'react-native-splash-screen';

export const Navigation = () => {
  const {isAuthenticated} = useContext(AuthenticationContext);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
};
