import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'

import {counter} from './redux/reducers'
import App from './app'

// 根据counter创建store对象
const store = createStore(counter)

const render = () => {
  ReactDOM.render(<App store={store} />, document.getElementById('root'))
}
render()
// 需要订阅监听，一旦状态发生了变化，就会重新的渲染
store.subscribe(
  render
)
