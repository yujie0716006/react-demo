import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Counter extends Component {
  static propTypes = {
    count: PropTypes.number.isRequired,
    increase: PropTypes.func.isRequired,
    decrease: PropTypes.func.isRequired,
    increaseAsync: PropTypes.func.isRequired,
  }
  increase = () => {
    const number = this.select.value*1
    this.props.increase(number)
  }

  decrease = () => {
    const number = this.select.value*1
    this.props.decrease(number)
  }

  oddIncrease = () => {
    const number = this.select.value*1
    const count = this.props.count
    if (count % 2 === 1) {
      this.props.increase(number)
    }
  }

  asycIncrease = () => {
    const number = this.select.value*1
    this.props.increaseAsync(number)
  }

  render () {
    const count = this.props.count
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