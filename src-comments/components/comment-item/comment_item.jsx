import React, {Component} from 'react'
import PropTypes from 'prop-types'
import PubSub from 'pubsub-js'

export default class CommentItem extends Component {
  static propTypes = {
    comment: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
  }

  // 点击删除评论按钮
  handleDelete = (index) => {
    console.log('点击', index)
    PubSub.publish('deleteComment', index)
  }

  render () {
    const {comment, index} = this.props
    return (
      <li className="list-group-item">
        <div className="handle">
          <a href="javascript:;" onClick={() => this.handleDelete(index)}>删除</a>
        </div>
        <p className="user"><span>{comment.name}</span><span>说:</span></p>
        <p className="centence">{comment.comment}</p>
      </li>
    )
  }
}