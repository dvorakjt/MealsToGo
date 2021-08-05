import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {View, Text} from 'react-native';

import {RestaurantsScreen} from '../../features/restaurants/screens/restaurants.screen';

const RestaurantStack = createNativeStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator>
      <RestaurantStack.Screen name="Hello" component={RestaurantsScreen} />
    </RestaurantStack.Navigator>
  );
};
