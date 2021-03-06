import React, {useContext, useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import MapView from 'react-native-maps';

import {Search} from '../components/search.component';
import {MapCallout} from '../components/map-callout.component';

import {LocationContext} from '../../../services/location/location.context';
import {RestaurantsContext} from '../../../services/restaurants/restaurants.context';

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

const LocalMap = ({navigation}) => {
  const {location} = useContext(LocationContext);
  const {restaurants = []} = useContext(RestaurantsContext);

  const {viewport, lat, lng} = location;

  const [latDelta, setLatDelta] = useState(0);

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;

    const latDelta = northeastLat - southwestLat;
    setLatDelta(latDelta);
  }, [location, viewport]);

  return (
    <>
      <Search />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}>
        {restaurants.map(restaurant => {
          return (
            <MapView.Marker
              key={restaurant.name}
              title={restaurant.name}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}>
              <MapView.Callout
                onPress={() => {
                  navigation.navigate('Restaurant Details', {restaurant});
                }}
                style={styles.callout}>
                <MapCallout restaurant={restaurant} />
              </MapView.Callout>
            </MapView.Marker>
          );
        })}
      </Map>
    </>
  );
};

export const MapScreen = ({navigation}) => {
  const {location} = useContext(LocationContext);
  if (!location) {
    return (
      <>
        <Search />
        <Map
          region={{
            latitude: 0,
            longitude: 0,
          }}
        />
      </>
    );
  } else {
    return <LocalMap navigation={navigation} />;
  }
};

const styles = StyleSheet.create({
  callout: {
    alignItems: 'center',
  },
});
