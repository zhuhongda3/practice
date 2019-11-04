import React from 'react'
// import ReactDOM from 'react-dom';

// antd
import { Button } from 'antd'
import 'antd/dist/antd.css'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

// 学习地址： https://www.jianshu.com/p/e06736dbac65
// https://www.jianshu.com/p/7ae9b7e74023

// HashRouter
// ReactDOM.render(
// <HashRouter>
//   <Route path="/" component={home}></Route>
// </HashRouter>, document.getElementById('root'));

// BrowerRouter :
//原理是使用HTML5 history API (pushState, replaceState, popState)来使你的内容随着url动态改变的
/**
 * exact控制匹配到/路径时不会再继续向下匹配
 * path标识路由的路径
 * component表示路径对应显示的组件
 */

const RouterExample = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
    </div>
  </Router>
)

const Home = () => (
  <div>
    <h2>Home</h2>
    <Button type="primary">Button</Button>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

export default RouterExample
