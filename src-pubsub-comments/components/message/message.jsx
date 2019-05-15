import React, {Component} from 'react'
import {Link, Route} from 'react-router-dom'

import MessageDetail from './message-detail'

export default class message extends Component {
  state = {
    messages: [
      {name: 'xiaowang', age: 13, address: 'jiaozuo', message: '1111111'},
      {name: 'tom', age: 89, address: 'beijing', message: '22222222'},
      {name: 'hello', age: 23, address: 'what', message: '3333333333'},
    ]
  }

  handleLink = () => {
    this.props.history.push({pathname:'/about', xxx: {name: 'djdjdj'}})
  }

  render () {
    const {messages} = this.state
    return (
      <div>
        <ul>
          {
            messages.map((message, index) => (
              <li key={index}>
                <Link to={`/home/message/detail/${message.name}`}>{message.message}</Link>
                <button onClick={this.handleLink}>点击链接跳转</button>
              </li>
            ))
          }
        </ul>
        <div>message详情展示：</div>
        <Route path='/home/message/detail/:name' component={MessageDetail}></Route>
      </div>
    )
  }
}