import React, {Component} from 'react'
import PubSub from 'pubsub-js'

import './app.css'

import User from './components/user/user'
import Comments from './components/comments/comments'

export default class App extends Component {
  state = {
    inputObj: {
      inputVal: ''
    },
    commentList: [
      {name: '小明', comment: '也挺好的'},
      {name: '小王', comment: '什么啊'},
      {name: '小花', comment: '真是的'}
    ]
  }
  componentDidMount () {
    PubSub.subscribe('deleteComment', (msg, index) => {
      const {commentList} = this.state
      commentList.splice(index, 1)
      this.setState({commentList})
    })
    PubSub.subscribe('addComment', (msg, comment) => {
      const {commentList} = this.state
      commentList.unshift(comment)
      this.setState({
        commentList
      })
    })
  }
  handleChange = (event) => {
    const {inputObj} = this.state
    inputObj.inputVal = event.target.value
    this.setState({inputObj})
  }


  render () {
  const {commentList, inputObj} = this.state
    return (
      <div>
        <header className="site-header jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h1>请发表对React的评论</h1>
                <div>
                  <input type="text" value={inputObj.inputVal} onChange={this.handleChange}/>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <User inputObj={inputObj}></User>
          <Comments commentList={commentList}></Comments>
        </div>
      </div>
    )
  }
}