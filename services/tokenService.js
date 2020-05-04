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

export default {
  setToken,
};