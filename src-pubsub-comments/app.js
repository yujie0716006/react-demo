import React, {Component} from 'react'
import {Switch, Route, Redirect, BrowserRouter} from "react-router-dom";

import About from './components/about/about'
import Home from './components/home/home'
import MyNavLink from './components/my_nav_link/my_nav_link'

import './index.css'

export default class App extends Component {
  render () {
    return (
      <div className={'app-wrap'}>
        <h2>React Router Demo</h2>
        <div className="content">
          <ul className="left-nav">
            <li>
              <MyNavLink className='nav-link' to='/about'>about</MyNavLink>
            </li>
            <li>
              <MyNavLink to='/home'>home</MyNavLink>
            </li>
          </ul>
          <div className='router-show'>
            <Switch>
              <Route path='/about' component={About}></Route>
              <Route path='/home' component={Home}></Route>
              <Redirect to='/about'></Redirect>
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}