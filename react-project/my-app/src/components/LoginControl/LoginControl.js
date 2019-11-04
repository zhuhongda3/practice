import React, { Component } from 'React'

function UserGreeting(props) {
  return <h1>Welcome back!</h1>
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>
}

function Greeting(props) {
  //阻止组件渲染
  //if(!isLoggedIn) return null  (在组件的 render 方法中返回 null 并不会影响组件的生命周期，componentDidUpdate 依然会被调用)
  const isLoggedIn = props.isLoggedIn
  if (isLoggedIn) {
    return <UserGreeting />
  }
  return <GuestGreeting />
}

function LogoutButton(props) {
  return <button onClick={props.onClick}>Logout</button>
}

function LoginButton(props) {
  return <button onClick={props.onClick}>Login</button>
}

class LoginControl extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false
    }
  }

  handleLoginClick = () => {
    this.setState({
      isLoggedIn: true
    })
  }

  handleLogoutClick = () => {
    this.setState({
      isLoggedIn: false
    })
  }

  render() {
    // 条件渲染的几种方式: 1.if  2.逻辑与(&&)  3.三目运算符
    const isLoggedIn = this.state.isLoggedIn

    // let button

    // if (isLoggedIn) {
    //   button = <LogoutButton onClick={this.handleLogoutClick} />
    // } else {
    //   button = <LoginButton onClick={this.handleLoginClick} />
    // }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {/* {button} */}

        {this.state.isLoggedIn ? (
          <LogoutButton onClick={this.handleLogoutClick} />
        ) : (
          <LoginButton onClick={this.handleLoginClick} />
        )}

        {this.state.isLoggedIn && <div>现在是登录状态</div>}
      </div>
    )
  }
}

export default LoginControl
