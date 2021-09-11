import React, {useContext, useState} from 'react';
import {ScrollView} from 'react-native';
import {List, Divider} from 'react-native-paper';
import {Text} from '../../../components/typography/text.component';
import {Spacer} from '../../../components/spacers/spacer.component';
import {SafeArea} from '../../../components/utility/safe-area.component';
import {CreditCardInput} from '../components/credit-card.component';
import {CartContext} from '../../../services/cart/cart.context';
import {RestaurantInfoCard} from '../../restaurants/components/restaurant-info-card.component';
import {
  NameInput,
  CartIcon,
  CartIconContainer,
  PayButton,
  ClearButton,
  PaymentProcessingComponent,
} from '../components/checkout.styles';
import {payRequest} from '../../../services/checkout/checkout.service';

export const CheckoutScreen = ({navigation}) => {
  const {cart, restaurant, sum, clearCart} = useContext(CartContext);
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [card, setCard] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const onPay = () => {
    setIsLoading(true);
    if (!card || !card.id) {
      setIsLoading(false);
      navigation.navigate('CheckoutError', {
        error: 'Please enter a valid credit card',
      });
      return;
    }
    payRequest(card.id, sum, `${fName} ${lName}`)
      .then(res => {
        setIsLoading(false);
        clearCart();
        navigation.navigate('CheckoutSuccess');
      })
      .catch(e => {
        setIsLoading(false);
        navigation.navigate('CheckoutError', {
          error: e,
        });
      });
  };

  if (!cart.length || !restaurant) {
    return (
      <SafeArea>
        <CartIconContainer>
          <CartIcon icon="cart-off" />
          <Text>Your cart is empty!</Text>
        </CartIconContainer>
      </SafeArea>
    );
  }
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      {isLoading && <PaymentProcessingComponent />}
      <ScrollView>
        <Spacer position="left" size="large">
          <Spacer position="top" size="medium">
            <Text>Your Order</Text>
          </Spacer>
        </Spacer>
        <List.Section>
          {cart.map(({item, price}, index) => {
            return (
              <List.Item
                title={`${item} - $${price / 100}`}
                key={`${item}-${index}`}
              />
            );
          })}
        </List.Section>
        <Spacer position="left" size="large">
          <Spacer position="top" size="medium">
            <Text>Total: ${sum / 100}</Text>
          </Spacer>
        </Spacer>
        <Spacer position="top" size="large" />
        <Divider />
        <NameInput
          label="First Name"
          value={fName}
          onChangeText={t => {
            setFName(t);
          }}
        />
        <NameInput
          label="Last Name"
          value={lName}
          onChangeText={t => {
            setLName(t);
          }}
        />
        {fName.length > 0 && lName.length > 0 && (
          <Spacer position="top" size="large">
            <CreditCardInput
              name={`${fName} ${lName}`}
              onSuccess={setCard}
              onError={() => {
                navigation.navigate('CheckoutError', {
                  error: 'Something went wrong processing your credit card.',
                });
              }}
            />
          </Spacer>
        )}
        <Spacer position="top" size="xxl">
          <PayButton
            icon="cash-usd"
            mode="contained"
            onPress={onPay}
            disabled={isLoading}>
            Pay Now
          </PayButton>
        </Spacer>
        <Spacer position="top" size="large">
          <ClearButton
            icon="cart-off"
            mode="contained"
            onPress={clearCart}
            disabled={isLoading}>
            Clear Cart
          </ClearButton>
        </Spacer>
      </ScrollView>
    </SafeArea>
  );
};
