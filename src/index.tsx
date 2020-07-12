import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { BaseStyle, theme } from './baseStyles'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <BaseStyle />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
