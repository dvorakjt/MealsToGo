const liveHost = 'https://us-central1-meals-to-go-1ae31.cloudfunctions.net';
const localHost = 'http://10.0.2.2:5001/meals-to-go-1ae31/us-central1';
export const isDevelopment = process.env.NODE_ENV === 'development';
export const host = isDevelopment ? localHost : liveHost;
