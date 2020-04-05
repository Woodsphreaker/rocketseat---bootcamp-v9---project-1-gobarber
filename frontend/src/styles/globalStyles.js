import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box
  }

  body {
    min-height: 100%
  }

  body {
    font-size: 400 14px;
    font-family: Roboto, sans-serif;
    background-color: #f0f0f0;
    -web-kit-smoothing: antialised !important
  }

  body, input, textarea, button {
    color: #222;
    font-size: 400 18px;
    font-family: Roboto, sans-serif;
  }

  button {
    cursor: pointer !important;
  }
`
