import React, {Component} from 'react'
import PropTypes from 'prop-types'
import PubSub from 'pubsub-js'

export default class User extends Component {
  componentWillReceiveProps(nextProps, nextContext) {
    console.log('nextProps, nextContext',nextProps, nextContext )
  }

  handleAdd = () => {
    const name = this.username.value.trim()
    const comment = this.comment.value.trim()
    const commentObj = {
      name,
      comment
    }
    if (!name || !comment) {
      return
    }
    PubSub.publish('addComment', commentObj)
    this.username.value = ''
    this.comment.value = ''
  }

  render () {

    return (
      <div className="col-md-4">
        <form className="form-horizontal">
          <div className="form-group">
            <label>从父组件中接收的参数：{this.props.inputObj.inputVal}</label>
          </div>
          <div className="form-group">
            <label>用户名</label>
            <input type="text" className="form-control" placeholder="用户名" ref={input => this.username = input}/>
          </div>
          <div className="form-group">
            <label>评论内容</label>
            <textarea className="form-control" rows="6" placeholder="评论内容" ref={input => this.comment = input}></textarea>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="button" className="btn btn-default pull-right" onClick={this.handleAdd}>提交</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}