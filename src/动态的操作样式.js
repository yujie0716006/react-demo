import React, {Component} from 'react'

import './app.css'

export default class App extends Component {
  state = {
    active: false
  }
  handleClick = () => {
    this.setState({
      active: !this.state.active
    })
    setTimeout(() => {
      console.log('active', this.state.active)
    }, 1000)
  }
  render () {
    const {active} = this.state
    return (
      <div>
        <div className={`div-style ${this.state.active ? 'div-active' : ''}`} onClick={this.handleClick}>
          这是样式么？
        </div>
        <div>
          {
            active ? (
              <div>成立显示</div>
              ) : (
              <div>
                不成立显示
              </div>
            )
          }
        </div>
      </div>
    )
  }
}