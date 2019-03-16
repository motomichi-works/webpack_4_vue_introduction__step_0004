module.exports = {
  "extends": [
    "vue",
    "plugin:vue/recommended"
  ],
  "plugins": [
    "vue"
  ],
  "parserOptions": {
    "ecmaVersion": 6,
    "parser": "babel-eslint",
    "sourceType": "module"
  },
  "env": {
    "browser": true,
    "es6": true
  },
  "globals": {},
  "rules": {
    "semi": ["error", "always"],
    "comma-dangle": ["error", "always-multiline"],
  }
}
