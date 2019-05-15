import React, {Component} from 'react'
import {Link, Route, Redirect, BrowserRouter, Switch} from 'react-router-dom'

import News from '../news/news'
import Message from '../message/message'

export default class Home extends Component {
  homeButton = () => {
    console.log('homeButtom', this.props)
  }

  render () {

    return (
      <div>
        <h2>我是home组件</h2>
        <div>
          <Link className='home-li' to="/home/news">news</Link>
          <Link className='home-li' to="/home/message">message</Link>
          <button onClick={this.homeButton}>home按钮</button>
        </div>
        <div>
          <h3>前套路由展示位置：</h3>
            <Switch>
              <Route path='/home/news' component={News}></Route>
              <Route path='/home/message' component={Message}></Route>
              <Redirect to='/home/news'></Redirect>
            </Switch>
        </div>
      </div>
    )
  }
}