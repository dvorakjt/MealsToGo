import React from 'react';
import {FlatList} from 'react-native';
import {SafeArea} from '../../../components/utility/safe-area.component';
import {RestaurantInfoCard} from '../components/restaurant-info-card.component';
import {Accordion} from '../components/accordion.component';

const MENUS = [
  {
    title: 'Breakfast',
    icon: 'food-variant',
    listItems: [{title: 'Omelet'}, {title: 'Cereal'}, {title: 'Hashbrowns'}],
  },
  {
    title: 'Lunch',
    icon: 'hamburger',
    listItems: [{title: 'Hoagie'}, {title: 'Hamburger'}, {title: 'Sandwich'}],
  },
  {
    title: 'Dinner',
    icon: 'pasta',
    listItems: [{title: 'Spaghetti'}, {title: 'Steak'}, {title: 'Salmon'}],
  },
  {
    title: 'Drinks',
    icon: 'beer',
    listItems: [{title: 'Beer'}, {title: 'Martini'}, {title: 'Lemonade'}],
  },
];

export const RestaurantDetailScreen = ({route}) => {
  const {restaurant} = route.params;
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <FlatList
        data={MENUS}
        renderItem={({item}) => (
          <Accordion
            title={item.title}
            icon={item.icon}
            listItems={item.listItems}
          />
        )}
        keyExtractor={item => item.title}
      />
    </SafeArea>
  );
};
