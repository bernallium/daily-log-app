// Token related methodsfor:
// - Storing, retrieving and removing tokens from localStorage
// - Verifying that a token has not expired and removing it from storage if it has.
// - Extracting the data payload (the user's info).

// To persist the token in local storage
function setToken(token) {
  if (token) {
    localStorage.setItem('token', token); // localStorage is available on the global scope
  } else {
    localStorage.removeItem('token');
  }
}

// Retrieves and verifies that the token has not expired
function getToken() {
  let token = localStorage.getItem('token'); 
  if (token) {
    // Check if expired, remove if it is
    const payload = JSON.parse(atob(token.split('.')[1])); // Gets the payload (claims), a JSON string, and converts it into a JavaScript object
    // JWT's exp is expressed in seconds, not milliseconds, so convert
    if (payload.exp < Date.now() / 1000) {
      localStorage.removeItem('token');
      token = null;
    }
  }
  return token;
}

// Decodes the token, then extracts and returns the user
function getUserFromToken() {
  const token = getToken();
  return token ? JSON.parse(atob(token.split('.')[1])).user : null;
}

export default {
  setToken,
  getToken,
  getUserFromToken,
};