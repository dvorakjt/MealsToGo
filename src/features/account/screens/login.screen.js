import React, {useState, useContext} from 'react';
import {StyleSheet} from 'react-native';
import {ActivityIndicator, Colors} from 'react-native-paper';
import {AuthenticationContext} from '../../../services/authentication/authentication.context';
import {Spacer} from '../../../components/spacers/spacer.component';
import {Text} from '../../../components/typography/text.component';
import {
  AccountBackgroundImage,
  AccountCover,
  AccountContainer,
  AuthButton,
  AuthTextInput,
  ErrorContainer,
} from '../components/account.styles';
import {Navigation} from '../../../infrastructure/navigation';

export const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {onLogin, error, isLoading} = useContext(AuthenticationContext);

  return (
    <AccountBackgroundImage>
      <AccountCover />
      <Text variant="h4">Meals To Go</Text>
      <AccountContainer>
        <AuthTextInput
          label="Email address"
          textContextType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={text => {
            setEmail(text);
          }}
          value={email}
        />
        <AuthTextInput
          label="Password"
          textContextType="password"
          autoCapitalize="none"
          secureTextEntry
          onChangeText={text => {
            setPassword(text);
          }}
          value={password}
        />
        {error && (
          <ErrorContainer>
            <Text variant="error">{error.message}</Text>
          </ErrorContainer>
        )}
        <Spacer position="top" size="medium" />
        {!isLoading ? (
          <AuthButton
            icon="lock-open-outline"
            onPress={() => onLogin(email, password)}>
            Login
          </AuthButton>
        ) : (
          <ActivityIndicator />
        )}
      </AccountContainer>
      <Spacer position="top" size="large" />
      <AuthButton
        icon="arrow-left-thick"
        style={styles.shadow}
        onPress={() => {
          navigation.navigate('main');
        }}>
        Back
      </AuthButton>
    </AccountBackgroundImage>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowOffset: {width: 16, height: 8},
    shadowColor: 'black',
    shadowOpacity: 1,
    elevation: 3,
    backgroundColor: '#FF5555',
  },
});
