import React from 'react';
// require("prop-types");
 require("babel-polyfill");
import ReactDOM, { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Letter from './component/Letter.jsx'
const Home = () => (
  <div>
    <h2>Home</h2>
    <div>
      <Letter color="red">A1</Letter>
    </div>
    <div>
      <Letter color="blue">A2</Letter>
    </div>
    <div>
      <Letter>A3</Letter>
    </div>
    <div>
      <Letter color="yellow">A4</Letter>
    </div>
    <div>
      <Letter>A5</Letter>
    </div>
  </div>
)

const About = () => (
  <div>
    <h2>About!!!!org</h2>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )} />
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)
/**
 * construct of indexItem
 * @constructor
 * @param {String} title link title
 * @param {String} path  link path
 */
class IndexItem {
  constructor(title, path, component) {
    this.title = title;
    this.path = path;
    this.component = component;
  }

}
// list of instacne of IndexItem
let indexList = [
  new IndexItem('Home', `/`, Home),
  new IndexItem('About', `/about`, About),
  new IndexItem('Topics', `/topics`, Topics)
];

const linkList = indexList.map(function (item) {
  return <li><Link to={item.path} >{item.title}</Link></li>
})

const routeList = indexList.map((item) => <Route exact path={item.path} component={item.component} />)
const Index = () => (
  <Router>
    <div>
      <ul>
        {linkList}
      </ul>

      <hr />
      {routeList}
      {/* <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} /> */}
    </div>
  </Router>
)




ReactDOM.render((
  <Index />
), document.getElementById('root'));