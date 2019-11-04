import React, { Component, Fragment } from 'react'

class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = { date: new Date() }
    // this.handleClick = this.handleClick.bind(this)
  }

  //事件声明
  handleClick1 = function(id) {
    alert(id)
  }

  handleClick2 = id => {
    alert(id)
  }

  handleClick3 = e => {
    e.preventDefault()  //阻止事件冒泡必须显示声明，不能使用return false代替
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 100)
  }

  componentWillMount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  render() {
    return (
      <Fragment>
        <div className="demo">{this.state.date.getTime()}</div>
        <button onClick={this.handleClick1.bind(this, 1)}>
          点击事件1（推荐方式）
        </button>
        <button onClick={e => this.handleClick2(2, e)}>点击事件2</button>
        <button onClick={e => this.handleClick3}>阻止事件冒泡</button>
      </Fragment>
    )
  }
}

export default Clock
