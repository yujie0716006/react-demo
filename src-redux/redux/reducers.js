/*
* reducers中的内容是，根据老的state和指定的actions，得到一个新的state，并将其返回出去
* */
import {INCREASE, DECREASE} from './actions-types'
// 这个可能有多个counter函数
export function counter(state = 0, action) {
  console.log('action', action)
  switch(action.type) {
    case INCREASE : return state + action.data
    case DECREASE : return state - action.data
    default: return state
  }
}