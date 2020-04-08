import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%
  }

  body {
    font-size: 14px;
    font-family: Roboto, sans-serif;
    -web-kit-smoothing: antialised !important
  }

  body, input, textarea, button {
    font-size: 14px;
    font-family: Roboto, sans-serif;
  }

  a {
    text-decoration: none
  }

  ul {
    list-style: none
  }

  button {
    cursor: pointer !important;
  }
`
