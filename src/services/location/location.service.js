import camelize from 'camelize';
import {host} from '../../utils/env';

export const locationRequest = searchTerm => {
  return fetch(`${host}/geocode?city=${searchTerm}`)
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
