import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {RestaurantsNavigator} from './restaurants.navigator';
import {SafeArea} from '../../components/utility/safe-area.component';

const MapScreen = () => {
  return (
    <SafeArea>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'green',
        }}>
        <Text>Map Screen will go here</Text>
      </View>
    </SafeArea>
  );
};

const SettingsScreen = () => {
  return (
    <SafeArea>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'blue',
        }}>
        <Text>Settings Screen will go here</Text>
      </View>
    </SafeArea>
  );
};

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
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
};
