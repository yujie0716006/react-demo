import React, {Component} from 'react'
import PropTypes from 'prop-types'

import CommentItem from '../comment-item/comment_item'

export default class Comments extends Component {
  static propsTypes = {
    commentList: PropTypes.array.isRequired,
  }
  render () {
    let {commentList} = this.props
    const display = commentList.length === 0 ? 'block' : 'none'
    return (
      <div className="col-md-8">
        <h3 className="reply">评论回复：</h3>
        <h2 style={{display}}>暂无评论，点击左侧添加评论！！！</h2>
        <ul className="list-group">
          {
            commentList.map((item, index) => {
              return (
                <CommentItem key={index} comment={item} index={index}></CommentItem>
              )
            })
          }
        </ul>
      </div>
    )
  }
}