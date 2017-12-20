import React from 'react';
import ReactDOM, { render } from 'react-dom';
import {GrantPermissions} from 'Permissions';
require('Mock');
class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };

    this.submitDateRange = this.submitDateRange.bind(this);
  }
  submitDateRange(status) {
   
  }
  render() {
   
  
    return (<GrantPermissions submit={this.submitDateRange} />)
  }
}
ReactDOM.render((
  <Root />
), document.getElementById('root'));
