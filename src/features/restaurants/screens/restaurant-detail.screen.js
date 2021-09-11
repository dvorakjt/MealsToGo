import React, {useContext} from 'react';
import {FlatList} from 'react-native';
import {Divider} from 'react-native-paper';
import {SafeArea} from '../../../components/utility/safe-area.component';
import {RestaurantInfoCard} from '../components/restaurant-info-card.component';
import {Accordion} from '../components/accordion.component';
import {Spacer} from '../../../components/spacers/spacer.component';
import {OrderButton} from '../components/restaurant-info-card.styles';
import {CartContext} from '../../../services/cart/cart.context';

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

export const RestaurantDetailScreen = ({navigation, route}) => {
  const {restaurant} = route.params;
  const {addToCart} = useContext(CartContext);
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <FlatList
        data={MENUS}
        renderItem={({item}) => (
          <>
            <Accordion
              title={item.title}
              icon={item.icon}
              listItems={item.listItems}
            />
            <Divider />
          </>
        )}
        keyExtractor={item => item.title}
      />
      <Spacer position="bottom" size="large">
        <OrderButton
          icon="cash-usd"
          mode="contained"
          onPress={() => {
            addToCart({item: 'special', price: 1299}, restaurant);
            navigation.navigate('Checkout');
          }}>
          Order special only 12.99
        </OrderButton>
      </Spacer>
    </SafeArea>
  );
};
