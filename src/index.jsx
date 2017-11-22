import React from 'react';
import ReactDOM, { render } from 'react-dom';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      title: this.props.title,
      time: 0
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
    this.setState(function (prevState, props) {

      return { title: `${prevState.time++}${props.title}` }
    });
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.time % 2) {
      return false;
    }
    return true;
  }
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}


ReactDOM.render(
  <Clock title="Hello" />,
  document.getElementById('root')
);