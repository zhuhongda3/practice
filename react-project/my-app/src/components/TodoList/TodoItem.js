import React, { Component } from 'react'

class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.delete = this.delete.bind(this)
  }

  delete() {
    this.props.delete(this.props.index)
  }

  render() {
    return (
      <li>
        {this.props.item}
        <button onClick={this.delete}>delete</button>
      </li>
    )
  }
}

export default TodoItem
