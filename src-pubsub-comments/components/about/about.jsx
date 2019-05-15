import React, {Component} from 'react'

export default class About extends Component {
  componentDidMount () {
    console.log('params', this.props)
  }
  render () {

    return (
      <div>我是about组件</div>
    )
  }
}