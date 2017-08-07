import React from 'react';
import ReactDOM, { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
const Home = () => (
  <div>
    <h2>Home</h2>
    <iframe src="https://gist.github.com/advence-liz"/>
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
 * @prop {String} title link title
 * @prop {String} path  link path
 * @see {Person}
 */
class IndexItem {
  constructor(title, path) {
    this.title = title;
    this.path = path;
  }
}
// let componentList=[]
let indexList = [new IndexItem('Home',`/`),new IndexItem('About',`/about`),new IndexItem('Topics',`/topics`)];
const linkList = indexList.map(function(item){
 return <li><Link to={item.path} >{item.title}</Link></li>
})
const routeList=indexList.map((item)=> <Route exact path={item.path} component={Home} /> )
const Index = () => (
  <Router>
    <div>
      <ul>
       {linkList}
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
    </div>
  </Router>
)




ReactDOM.render((
  <Index />
), document.getElementById('root'));