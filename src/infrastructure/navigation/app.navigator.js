import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {RestaurantsNavigator} from './restaurants.navigator';
import {MapScreen} from '../../features/map/screens/map.screen';
import {CheckoutNavigator} from './checkout.navigator';
import {SettingsNavigator} from './settings.navigator';
import {FavoritesContextProvider} from '../../services/favorites/favorites.context';
import {LocationContextProvider} from '../../services/location/location.context';
import {RestaurantsContextProvider} from '../../services/restaurants/restaurants.context';
import {CartContextProvider} from '../../services/cart/cart.context';

const Tab = createBottomTabNavigator();

const TAB_ICONS = {
  Restaurants: {
    focused: 'restaurant',
    unfocused: 'restaurant-outline',
  },
  Checkout: {
    focused: 'cart',
    unfocused: 'cart-outline',
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
    tabBarActiveTintColor: '#FF5555',
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
      <Tab.Screen name="Checkout" component={CheckoutNavigator} />
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
            <CartContextProvider>
              <MyTabs />
            </CartContextProvider>
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </FavoritesContextProvider>
    </>
  );
};
