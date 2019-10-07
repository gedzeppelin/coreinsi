module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: [
    //'plugin:vue/essential',
    'plugin:vue/strongly-recommended',
    'plugin:prettier/recommended',
    '@vue/prettier'
  ],

  rules: {
    'no-console': 'off',
    'no-debugger': 'off'
  }
}
