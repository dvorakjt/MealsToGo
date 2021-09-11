import React, {useContext, useState, useCallback} from 'react';
import {List, Avatar} from 'react-native-paper';
import styled from 'styled-components/native';
import {SafeArea} from '../../../components/utility/safe-area.component';
import {Text} from '../../../components/typography/text.component';
import {AuthenticationContext} from '../../../services/authentication/authentication.context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/core';
import {colors} from '../../../infrastructure/theme/colors';

const SettingsItem = styled(List.Item)`
  padding: ${({theme}) => theme.space[2]};
`;

const AvatarContainer = styled.View`
  position: absolute;
  left: 0px;
  padding: ${({theme}) => theme.space[3]};
`;

const TextWrapper = styled.View`
  align-items: center;
  justify-content: center;
  height: 102px;
  padding ${({theme}) => theme.space[3]};
`;

const CameraWrapper = styled.TouchableOpacity`
  height: 30px;
  width: 30px;
  background-color: grey;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 5px;
  right: 5px;
`;

export const SettingsScreen = ({navigation}) => {
  const [photo, setPhoto] = useState(null);

  const {onLogout, user} = useContext(AuthenticationContext);

  const getProfilePicture = async currentUser => {
    const photoUri = await AsyncStorage.getItem(`${currentUser.uid}-photo`);
    setPhoto(photoUri);
  };

  useFocusEffect(
    useCallback(() => {
      getProfilePicture(user);
    }, [user]),
  );

  return (
    <SafeArea>
      <AvatarContainer>
        {!photo ? (
          <Avatar.Icon
            size={80}
            icon="account"
            backgroundColor="gainsboro"
            style={{borderRadius: 40}}
          />
        ) : (
          <Avatar.Image
            size={80}
            source={{uri: photo}}
            style={{borderRadius: 40}}
          />
        )}
        <CameraWrapper onPress={() => navigation.navigate('Camera')}>
          <Ionicons name="camera" color="white" size={23} />
        </CameraWrapper>
      </AvatarContainer>
      <TextWrapper>
        <Text variant="label">{user.email}</Text>
      </TextWrapper>
      <List.Section>
        <SettingsItem
          title="Favorites"
          description="View your favorites"
          left={props => (
            <List.Icon {...props} color={colors.ui.error} icon="heart" />
          )}
          onPress={() => navigation.navigate('Favorites')}
        />
        <SettingsItem
          title="Payment Information"
          description="Edit your payment information"
          left={props => (
            <List.Icon
              {...props}
              color={colors.ui.secondary}
              icon="credit-card"
            />
          )}
          onPress={() => null}
        />
        <SettingsItem
          title="Past Orders"
          description="View your past orders"
          left={props => (
            <List.Icon {...props} color={colors.ui.secondary} icon="history" />
          )}
          onPress={() => null}
        />
        <SettingsItem
          title="Logout"
          left={props => (
            <List.Icon {...props} color={colors.ui.secondary} icon="door" />
          )}
          onPress={onLogout}
        />
      </List.Section>
    </SafeArea>
  );
};
