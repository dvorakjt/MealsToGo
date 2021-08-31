import React, {useRef, useState, useEffect, useContext} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Camera} from 'expo-camera';
import styled from 'styled-components/native';
import {Text} from '../../../components/typography/text.component';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthenticationContext} from '../../../services/authentication/authentication.context';

const ProfileCamera = styled(Camera)`
  width: 100%;
  height: 100%;
`;

const NoAccessView = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const CameraScreen = ({navigation}) => {
  const [hasPermission, setHasPermission] = useState(null);

  const cameraRef = useRef();
  const {user} = useContext(AuthenticationContext);

  const snap = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
      navigation.goBack();
    }
  };

  //get permission from the user to enable the camera
  useEffect(() => {
    (async () => {
      const {status} = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  //return an empty view until the user gives permission
  if (hasPermission === null) {
    return <View />;
  }

  //return text if the user declines permission
  if (hasPermission === false) {
    return (
      <NoAccessView>
        <Text variant="label">No access to camera.</Text>
      </NoAccessView>
    );
  }

  return (
    <TouchableOpacity onPress={snap}>
      <ProfileCamera
        ref={camera => (cameraRef.current = camera)}
        type={Camera.Constants.Type.front}
      />
    </TouchableOpacity>
  );
};
