import camelize from 'camelize';

export const restaurantRequest = location => {
  return fetch(
    `http://10.0.2.2:5001/meals-to-go-1ae31/us-central1/placesNearby?location=${location}`,
  ).then(res => {
    return res.json();
  });
};

export const restaurantsTransform = ({results = []}) => {
  const mappedResults = results.map(restaurant => {
    return {
      ...restaurant,
      address: restaurant.vicinity,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === 'CLOSED_TEMPORARILY',
    };
  });
  return camelize(mappedResults);
};
