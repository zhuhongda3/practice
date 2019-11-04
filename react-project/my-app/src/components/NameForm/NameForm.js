// 在 HTML 中，表单元素（如<input>、 <textarea> 和 <select>）之类的表单元素通常自己维护 state，并根据用户输入进行更新。
// 而在 React 中，可变状态（mutable state）通常保存在组件的 state 属性中，并且只能通过使用 setState()来更新。
// 我们可以把两者结合起来，使 React 的 state 成为“唯一数据源”。渲染表单的 React 组件还控制着用户输入过程中表单发生的操作。
// 被 React 以这种方式控制取值的表单输入元素就叫做“受控组件”。

// 对于受控组件来说，每个 state 突变都有一个相关的处理函数

// 替代方案： 非受控组件：https://zh-hans.reactjs.org/docs/uncontrolled-components.html

import React, { Component, Fragment } from 'React'

class NameForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '呵呵',
      content: '这是一段默认内容',
      type: ['coconut'], //单选String,多选Array
      isGoing: true
    }
  }

  handleChange = event => {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  handleSubmit = event => {
    console.log(JSON.stringify(this.state))
    event.preventDefault()
  }

  render() {
    return (
      <Fragment>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              名字：
              <input
                name="name"
                type="text"
                value={this.state.name}
                onChange={this.handleChange}
              ></input>
            </label>
          </div>

          <div>
            <label>
              选择你喜欢的风味:
              {/* <select
                name="type"
                value={this.state.type}
                onChange={this.handleChange}
              >
                <option value="grapefruit">葡萄柚</option>
                <option value="lime">酸橙</option>
                <option value="coconut">椰子</option>
                <option value="mango">芒果</option>
              </select> */}
              {/* 多选 */}
              <select
                name="type"
                multiple={true}
                value={this.state.type}
                onChange={this.handleChange}
              >
                <option value="grapefruit">葡萄柚</option>
                <option value="lime">酸橙</option>
                <option value="coconut">椰子</option>
                <option value="mango">芒果</option>
              </select>
            </label>
          </div>

          <div>
            <label>
              口味是否ok:
              <input
                name="isGoing"
                type="checkbox"
                checked={this.state.isGoing}
                onChange={this.handleChange}
              />
            </label>
          </div>

          <div>
            <label>
              回复内容：
              <textarea
                name="content"
                type="text"
                value={this.state.content}
                onChange={this.handleChange}
              ></textarea>
            </label>
          </div>

          <input type="submit" value="提交"></input>
        </form>
        <div>
          实时结果：
          {`${this.state.name}----${this.state.content}----${this.state.type}----${this.state.isGoing}`}
        </div>
      </Fragment>
    )
  }
}

export default NameForm
