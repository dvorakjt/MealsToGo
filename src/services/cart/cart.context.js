import React, {createContext, useState, useEffect, useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthenticationContext} from '../authentication/authentication.context';

export const CartContext = createContext();

export const CartContextProvider = ({children}) => {
  const {user} = useContext(AuthenticationContext);
  const [cart, setCart] = useState([]);
  const [restaurant, setRestaurant] = useState(null);
  const [sum, setSum] = useState(0);

  const saveCart = async (rst, crt, uid) => {
    console.log('Saving cart');
    console.log(cart);
    try {
      const jsonCart = JSON.stringify({restaurant: rst, cart: crt});
      await AsyncStorage.setItem(`@userCart-${uid}`, jsonCart);
    } catch (e) {
      console.log(e);
    }
  };

  const loadCart = async uid => {
    console.log('Retrieving cart');
    try {
      const value = await AsyncStorage.getItem(`@userCart-${uid}`);
      if (value !== null) {
        const crt = JSON.parse(value).cart;
        const rst = JSON.parse(value).restaurant;
        setRestaurant(rst);
        setCart(crt);
      }
    } catch (e) {
      console.log('error loading ', e);
    }
  };

  useEffect(() => {
    if (user) {
      loadCart(user.uid);
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      saveCart(restaurant, cart, user.uid);
    }
  }, [restaurant, cart, user]);

  useEffect(() => {
    if (cart) {
      if (!cart.length) {
        setSum(0);
        return;
      }
      const newSum = cart.reduce((acc, {price}) => {
        return (acc += price);
      }, 0);
      setSum(newSum);
    }
  }, [cart]);

  const add = (item, rst) => {
    if (!restaurant || restaurant.placeId !== rst.placeId) {
      setRestaurant(rst);
      setCart([item]);
    } else {
      setCart([...cart, item]);
    }
  };

  const clear = () => {
    setCart([]);
    setRestaurant(null);
  };

  return (
    <CartContext.Provider
      value={{
        addToCart: add,
        clearCart: clear,
        restaurant,
        cart,
        sum,
      }}>
      {children}
    </CartContext.Provider>
  );
};
