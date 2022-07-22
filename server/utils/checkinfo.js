module.exports = {
  isValidEmail: (email) => /\S+@\S+\.\S+/.test(email),
  isValidPassword: (password) =>
    password?.length >= 8 && /\d/.test(password) && /[a-zA-Z]/.test(password),
};
