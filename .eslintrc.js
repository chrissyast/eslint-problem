module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    quotes: 'warn',
    indent: 'warn',
    'space-before-function-paren': 'off',
    'no-undef': 'warn'
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  }
}
