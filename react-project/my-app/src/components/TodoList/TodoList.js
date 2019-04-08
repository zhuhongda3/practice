import React, { Component,Fragment } from 'react';
import TodoItem from './TodoItem';
import './TodoStyle.css';

// 简单介绍了父子组件如何通信
// 关于props 和 state的介绍可参考：https://segmentfault.com/a/1190000011184076
// props 解构用法介绍： https://www.cnblogs.com/cqsjs/p/5879644.html <Component {...props} />

class TodoList extends Component {
  constructor(props){
    super(props)
    this.state = {
      list: ['初始数据1','初始数据2'],
      inputValue: '',
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleButtonClick = this.handleButtonClick.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
  }

  handleButtonClick(){
    const list = [...this.state.list]
    list.push(this.state.inputValue)
    this.setState({
      list,
      inputValue: '',
    })
  }

  handleInputChange(e){
    this.setState({
      inputValue: e.target.value
    })
  }

  handleItemDelete(index){
    const list = [...this.state.list]
    list.splice(index,1)
    this.setState({list})
  }

  getTodoItem(){
    return (
      this.state.list.map((item,index)=>{
        return (
          <TodoItem
            key = {index}
            delete = {this.handleItemDelete} 
            item = {item}
            index = {index}
          />
        )
      })
    )
  }

  render() {
    return (
      <Fragment>
        <div className="todo-header">
          <div className="inner">
            <input value={this.state.inputValue} onChange={this.handleInputChange}/>
            <button className="red-btn" onClick={this.handleButtonClick}>add</button>
          </div>
        </div>
        <div className="todo-wrap" style={{'border':'2px solid #000'}}>
          <div className="inner">
            <ul className="todo-list">{this.getTodoItem()}</ul>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default TodoList;
