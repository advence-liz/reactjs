import React from 'react';
import ReactDOM, { render } from 'react-dom';
import Example from './component/CodeBlock';

ReactDOM.render(
  <div className="main">
    <h1>样式DEMO</h1>
    <hr />
    <Example
    desc={`
    ## title
    > description you can use markdown sytax
    `}
    >
    {`
     code
    `}
    </Example>
  </div>
  ,
  document.getElementById('root')
);
