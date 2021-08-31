import camelize from 'camelize';

export const locationRequest = searchTerm => {
  console.log(
    `http://10.0.2.2:5001/meals-to-go-1ae31/us-central1/geocode?city=${searchTerm}`,
  );
  return fetch(
    `http://10.0.2.2:5001/meals-to-go-1ae31/us-central1/geocode?city=${searchTerm}`,
  )
    .then(res => {
      console.log(res);
      return res.json();
    })
    .catch(e => console.log(e));
};

export const locationTransform = result => {
  console.log(result);
  const formattedResult = camelize(result);
  const {geometry = {}} = formattedResult.results[0];
  const {lat, lng} = geometry.location;

  return {lat, lng, viewport: geometry.viewport};
};
