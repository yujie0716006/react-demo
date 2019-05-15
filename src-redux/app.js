import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {increase, decrease} from './redux/actions'

export default class App extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  }
  increase = () => {
    const number = this.select.value*1
    this.props.store.dispatch(increase(number))
  }

  decrease = () => {
    const number = this.select.value*1
    this.props.store.dispatch(decrease(number))
  }

  oddIncrease = () => {
    const number = this.select.value*1
    const count = this.props.store.getState()
    if (count % 2 === 1) {
      this.props.store.dispatch(increase(number))
    }
  }

  asycIncrease = () => {
    const number = this.select.value*1
    setTimeout(() => {
      this.props.store.dispatch(increase(number))
    }, 1000)
  }

  render () {
    const count = this.props.store.getState()
    return (
      <div style={{marginLeft: 100}}>
        count的值为； {count}
        <div>
          <select ref={select => this.select = select}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          &nbsp;&nbsp;
          <button onClick={this.increase}>+</button>&nbsp;&nbsp;
          <button onClick={this.decrease}>-</button>&nbsp;&nbsp;
          <button onClick={this.oddIncrease}>odd +</button>&nbsp;&nbsp;
          <button onClick={this.asycIncrease}>asyc +</button>
        </div>
      </div>
    )
  }
}