import createStripe from 'stripe-client';
import {host} from '../../utils/env';

console.log(host);

const stripe = createStripe(
  'pk_test_51JXykgDBWsH5WqkpoLlhj3P4yEUa2faFQoT4NQL6wMtIQ0tFH2Ich7s0PwBgWFSXTpXYL2MPMI4DP6vRdcbfaK5i00m8iiKV9p',
);

export const cardTokenRequest = card => stripe.createToken({card});

export const payRequest = (token, amount, name) => {
  return fetch(`${host}/pay`, {
    body: JSON.stringify({
      token,
      name,
      amount,
    }),
    method: 'POST',
  })
    .then(res => {
      if (res.status > 200) {
        return Promise.reject('something went wrong processing your payment');
      }
      console.log(res);
      return res.json();
    })
    .catch(e => console.log(e));
};
