import React from 'react';
import {CompactRestaurantInfo} from '../../../components/restaurant/compact-restaurant-info.component';
import styled from 'styled-components/native';

export const MapCallout = ({restaurant}) => {
  return <CompactRestaurantInfo restaurant={restaurant} isMap />;
};
