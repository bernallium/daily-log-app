import tokenService from './tokenService'; // Token related methods

const BASE_URL = '/api/users/';

function signup(user) {
  return fetch(BASE_URL + 'signup', {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(user)
  })
  .then(res => {
    if (res.ok) return res.json();
    // Probably a duplicate email
    throw new Error('Email already taken!');
  })
  // Parameter destructuring! The token is saved within an object to the key 'token' key
  .then(({token}) => 
    tokenService.setToken(token)); // setToken will be saved to the browser
  // The above could have been written as
  //.then((token) => token.token);
}

function getUser() {
  return tokenService.getUserFromToken();
}

export default {
  signup,
  getUser,
};