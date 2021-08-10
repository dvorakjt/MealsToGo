import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {RestaurantsNavigator} from './restaurants.navigator';
import {MapScreen} from '../../features/map/screens/map.screen';
import {SettingsNavigator} from './settings.navigator';
import {FavoritesContextProvider} from '../../services/favorites/favorites.context';
import {LocationContextProvider} from '../../services/location/location.context';
import {RestaurantsContextProvider} from '../../services/restaurants/restaurants.context';

const Tab = createBottomTabNavigator();

const TAB_ICONS = {
  Restaurants: {
    focused: 'restaurant',
    unfocused: 'restaurant-outline',
  },
  Map: {
    focused: 'map',
    unfocused: 'map-outline',
  },
  Settings: {
    focused: 'settings',
    unfocused: 'settings-outline',
  },
};

const tabBarIcon =
  iconCategory =>
  ({focused, color, size}) =>
    (
      <Ionicons
        name={iconCategory[focused ? 'focused' : 'unfocused']}
        size={size}
        color={color}
      />
    );

const createScreenOptions = ({route}) => {
  const iconCategory = TAB_ICONS[route.name];
  return {
    tabBarIcon: tabBarIcon(iconCategory),
    headerShown: false,
    tabBarActiveTintColor: 'tomato',
    tabBarInactiveTintColor: 'gray',
    tabBarStyle: [
      {
        display: 'flex',
      },
      null,
    ],
  };
};

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={createScreenOptions}>
      <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Settings" component={SettingsNavigator} />
    </Tab.Navigator>
  );
}

export const AppNavigator = () => {
  return (
    <>
      <FavoritesContextProvider>
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <MyTabs />
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </FavoritesContextProvider>
    </>
  );
};
