import React from 'react';
import ReactDOM, { render } from 'react-dom';
import DateRange from 'DateRange';
require('Mock');
class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FromTime: 636480768711190000,
      ToTime: 0,
      RangeType: 0
    };

    this.submitDateRange = this.submitDateRange.bind(this);
  }
  submitDateRange(status) {
    debugger;
  }
  render() {
    let dateRangeFilter = Object.create(null);
    Object.defineProperties(dateRangeFilter, {
      FromTime: {value:this.state.FromTime,enumerable:true,writable:true,configurable:true},
      ToTime: { get: () => { return this.state.ToTime; } },
      RangeType: { get: () => { return this.state.RangeType; } }
    })
   // dateRangeFilter={dateRangeFilter}
    return (<DateRange submit={this.submitDateRange}  />)
  }
}
ReactDOM.render((
  <Root />
), document.getElementById('root'));
// console.log(process);
// console.log(global);
// console.log(__dirname);
// console.log(__filename);
// console.log(module);
// if(PRODUCTION){
//   console.log("eeeeeeeeeeeee");
// }
// try{
//   throw("eeee");
// }catch(e){
   
//   console.error(`${__dirname}${__filename}`);
//   console.console(module.id);
  
// }