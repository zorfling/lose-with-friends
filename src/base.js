import Rebase from 're-base';
import firebase from 'firebase';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyDPEIzEjODHzFm2cID4XKe_SW2r1lQHDgo',
  authDomain: 'lose-with-friends.firebaseapp.com',
  databaseURL: 'https://lose-with-friends.firebaseio.com'
});
const base = Rebase.createClass(app.database());

export default base;
