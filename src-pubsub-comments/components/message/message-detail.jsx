import React, {Component} from 'react'

export default class MessageDetail extends Component {

  render () {
    console.log('props', this.props)
    return (
      <div>我是详情页面：</div>
    )
  }
}