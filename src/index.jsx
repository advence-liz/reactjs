import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { GrantPermissions } from 'Permissions';
require('Mock');
import _ from "lodash";
import Enum, { CAOperation } from "./Operation";
let status = {
  liz: 0,
  cc: 1,
  dd: 2
}
let operation = { siteCollectionUrl: `https://dddd.cdfcdf` }
CAOperation.getName(operation);
console.log(CAOperation.getName(operation))
console.log(CAOperation.getID(operation))
var key = Enum.getName(status, 0);
console.log(key);
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
if (PRODUCTION) {
  console.log('Production log')
}