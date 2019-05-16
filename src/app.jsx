import React, {Component} from 'react'

import './app.less'

export default class App extends Component {
  state = {
    active: false
  }
  render () {
    // const {active} = this.state
    return (
      <div>
        <div className="wrap">
          <div className="inner size">inner</div>
          <div className="second active">second</div>
        </div>

        <style jsx>{`
          .active{
            background-color: ${this.state.active ? 'black' : 'red'}
          }
          `}</style>
      </div>
    )
  }
}