import React from 'react';
import ReactDOM, { render } from 'react-dom';
import Gender from "./Components/Radio"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Form'
    }
  }
  render() {
    return (<div>
      <h1>{this.state.title}</h1>
      <Gender />
    </div>)
  }
}

ReactDOM.render( <Gender defaultChecked="male" />, document.getElementById('root'));

