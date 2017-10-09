import React from 'react';
import ReactDOM, { render } from 'react-dom';
// import Remarkable from 'remarkable';
// import Markdown from 'react-remarkable';
// const remarkable = new Remarkable();
import CodeBlock from './component/CodeBlock';

ReactDOM.render(
  <CodeBlock value={`
   <h1>Hello word</h1>
  `}
  />,
  document.getElementById('root')
);