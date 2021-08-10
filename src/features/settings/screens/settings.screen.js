import React, {useContext} from 'react';
import {List, Avatar} from 'react-native-paper';
import styled from 'styled-components/native';
import {SafeArea} from '../../../components/utility/safe-area.component';
import {Text} from '../../../components/typography/text.component';
import {AuthenticationContext} from '../../../services/authentication/authentication.context';

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

export const SettingsScreen = ({navigation}) => {
  const {onLogout, user} = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <AvatarContainer>
        <Avatar.Icon size={70} icon="human" backgroundColor="#2182BD" />
      </AvatarContainer>
      <TextWrapper>
        <Text variant="label">{user.email}</Text>
      </TextWrapper>
      <List.Section>
        <SettingsItem
          title="Favorites"
          description="View your favorites"
          left={props => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate('Favorites')}
        />
        <SettingsItem
          title="Logout"
          left={props => <List.Icon {...props} color="black" icon="door" />}
          onPress={onLogout}
        />
      </List.Section>
    </SafeArea>
  );
};
