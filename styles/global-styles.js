import { injectGlobal } from 'styled-components'

injectGlobal`
  html,
  body,
  #root {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    font-family: Arial, sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  ul {
    margin: 0;
    padding: 0;
  }
`
