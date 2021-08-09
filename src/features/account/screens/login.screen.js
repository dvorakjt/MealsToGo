import React, {useState, useContext} from 'react';
import {AuthenticationContext} from '../../../services/authentication/authentication.context';
import {Spacer} from '../../../components/spacers/spacer.component';
import {
  AccountBackgroundImage,
  AccountCover,
  AccountContainer,
  AuthButton,
  AuthTextInput,
} from '../components/account.styles';

export const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {onLogin} = useContext(AuthenticationContext);

  return (
    <AccountBackgroundImage>
      <AccountCover />
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
          secure
          onChangeText={text => {
            setPassword(text);
          }}
          value={password}
        />
        <Spacer position="top" size="medium" />
        <AuthButton
          icon="lock-open-outline"
          onPress={() => onLogin(email, password)}>
          Login
        </AuthButton>
      </AccountContainer>
    </AccountBackgroundImage>
  );
};
