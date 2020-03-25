import React from 'react'
import ReactDOM from 'react-dom'
import { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'
import App from './App'
import * as serviceWorker from './serviceWorker'

const GlobalStyle = createGlobalStyle`
  ${normalize()};

  html,
  body {
    width: 100%;
    min-height: 100%;
    margin: 0;
    padding: 0;
    font-family: 'PingFang SC', 'Hiragino Sans GB', 'Heiti SC', 'Microsoft YaHei',
      'WenQuanYi Micro Hei', Helvetica, Tahoma, Arial, sans-serif;
    color: #202936;
    font-size: 14px;
    font-weight: normal;
  }
`

ReactDOM.render(
  // * http://react.html.cn/docs/strict-mode.html
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
