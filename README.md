
# MealsToGo
MealsToGo is a restaurant-finder built using the ReactNative CLI through the Zero to Mastery course on Udemy. It is currently a WIP with additional features to be added, current features to be refined, and further customizations to be made.

## Features
### Restaurants
Restaurants are loaded from a mock API call depending on the location entered into the search bar. Restaurant information (name, photo, rating, address, type of restaurant, open status) is displayed in cards within a flatlist.

![Restaurants Feature](./read_me_images/restaurants.gif)

### Restaurant Details
Each restaurant card is wrapped in a touchable opacity which navigates to a restaurant details screen using stack navigation. Information about the restaurant is passed as a param through navigation.navigate. Map markers on the map screen also navigate here.

### Map Screen
The map screen uses react-native-maps and the Google Maps API to render a view of the current locale. The viewport is determined by calculating the latitude delta of the current location. Map markers are placed on the map for each restaurant in the current locale. These contain callouts which display a compact version of the restaurant card. These callouts navigate to the restaurant details screen.

### Favorites
Each restaurant card contains a custom favorite component. This component displays a heart which toggles between a filled-in red heart if the restaurant is favorited and a white outline of a heart if it is not. Favorites is an array and one of the values that the FavoritesContextProvider allows components to subscribe to. A restaurant is added to favorites upon clicking the heart if its placeId is not found in the favorites array and removed if it is.
Favorites are displayed in a favorites bar at the top of the screen which can be toggled on and off. Favorites are stored using @react-native-async-storage/async-storage and loaded when the FavoritesContext mounts.

## Packages/Frameworks/Software Used:

 - React Native CLI
 - Android Studio
 - Yarn
 - React Native Paper
 - Styled-components/native
 - React Native SVG
 - React Native Vector Icons
 - React Navigation
 - React Native Maps
 - Google Maps API
 - Camelize
 - @react-native-async-storage/async-storage
 - ESLint
 - Prettier

> Written with [StackEdit](https://stackedit.io/).
