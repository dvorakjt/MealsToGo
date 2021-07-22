import React from 'react';
import {StatusBar, View, Text} from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {theme} from './src/infrastructure/theme';
import {RestaurantsContextProvider} from './src/services/restaurants/restaurants.context';
import {LocationContextProvider} from './src/services/location/location.context';

import {RestaurantsScreen} from './src/features/restaurants/screens/restaurants.screen';
import {SafeArea} from './src/components/utility/safe-area.component';

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
  };
};

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={createScreenOptions}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
export default function App() {
  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor="#61dafb"
        barStyle={'default'}
        showHideTransition={'slide'}
        hidden={false}
      />
      <ThemeProvider theme={theme}>
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <NavigationContainer>
              <MyTabs />
            </NavigationContainer>
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
    </>
  );
}
