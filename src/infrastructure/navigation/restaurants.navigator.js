import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {View, Text} from 'react-native';

import {RestaurantsScreen} from '../../features/restaurants/screens/restaurants.screen';

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator screenOptions={{headerShown: false}}>
      <RestaurantStack.Screen
        name="Restaurants List"
        component={RestaurantsScreen}
      />
    </RestaurantStack.Navigator>
  );
};
