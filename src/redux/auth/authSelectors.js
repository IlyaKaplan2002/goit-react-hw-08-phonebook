const getIsLoggedIn = state => state.auth.isLoggedIn;
const getToken = state => state.auth.token;
const getEmail = state => state.auth.user.email;
const getName = state => state.auth.user.name;
const getIsRefreshing = state => state.auth.isRefreshing;

const selectors = {
  getIsLoggedIn,
  getToken,
  getEmail,
  getName,
  getIsRefreshing,
};

export default selectors;
