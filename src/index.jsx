import React from 'react';
import ReactDOM, { render } from 'react-dom';
//import Datagrid from 'Datagrid';
import DateRange from 'DateRange';
$$.I18N.timezones=[{"id":"Dateline Standard Time","displayName":"(UTC-12:00) International Date Line West","zone":"(UTC-12:00)","baseUtcOffset":"-12:00:00","supportsDaylightSavingTime":false,"hashCode":"-28726934","kind":0,"adjustmentRules":[]},{"id":"UTC-11","displayName":"(UTC-11:00) Coordinated Universal Time-11","zone":"(UTC-11:00)","baseUtcOffset":"-11:00:00","supportsDaylightSavingTime":false,"hashCode":"524007363","kind":0,"adjustmentRules":[]},{"id":"Samoa Standard Time","displayName":"(UTC-11:00) Samoa","zone":"(UTC-11:00)","baseUtcOffset":"-11:00:00","supportsDaylightSavingTime":false,"hashCode":"-758128916","kind":0}];
class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.submitDateRange = this.submitDateRange.bind(this);
  }
  submitDateRange(status) {
    debugger;
  }
  render() {
    return (<DateRange  submit={this.submitDateRange} />)
  }
}
ReactDOM.render((
  <Root />
), document.getElementById('root'));

