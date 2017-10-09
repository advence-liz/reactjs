import React from 'react';
import ReactDOM, { render } from 'react-dom';
// import Remarkable from 'remarkable';
// import Markdown from 'react-remarkable';
// const remarkable = new Remarkable();
import Example from './component/CodeBlock';

ReactDOM.render(
  <Example title={`Demo`}
  desc={`First DEMO`}
  >
  {`
  <section class="bs-example">
  <div class="message-bar message-bar--error">
      <span class="icon fi-page-circle-warning-a"></span>
      <span>Errors have occured on this <a href="#">page</a>.</span>
      <button class="fi-page-close-a icon message-bar__button" role="button" type="button" aria-label="Close" aria-disabled="false"></button>
  </div>
  <div class="message-bar">
      <span class="icon fi-page-circle-warning-a"></span>
      <span>Errors have occured on this <a href="#">page</a>.</span>
  </div>
  <div class="message-bar">
      <span class="red-star">*</span>
      <span>Errors have occured on this <a href="#">page</a>.</span>
  </div>
</section>
            
  `}
  </Example>
 ,
  document.getElementById('root')
);

