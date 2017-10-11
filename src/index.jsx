import React from 'react';
import ReactDOM, { render } from 'react-dom';
// import Remarkable from 'remarkable';dddddddddddddd
 import Markdown from 'react-remarkable';
// const remarkable = new Remarkable();
import Example from './component/CodeBlock';

ReactDOM.render(
<div className="main">
    <h1>样式DEddMO</h1>
    <hr/>
    <Example 
    desc={`
    ## MessageBar
    > messagebar 目前有三种 error,warning,info 可以直接修改又侧预览效果
    `} 
    >
    {`
    <section class="bs-example" >
          <div class="message-bar message-bar--error">
            <span class="icon fi-page-circle-warning-a"></span>
            <span>Errors have occured on this <a href="#">page</a>.</span>
            <button class="fi-page-close-a icon message-bar__button" role="button" type="button" aria-label="Close" aria-disabled="false"></button>
          </div>
          <div class="message-bar message-bar--info">
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
            <span>Errors have occured onssss this <a href="#">page</a>.</span>
          </div>
        </section>
    `}
    </Example>
    <Example
    desc={`
    ## Panel
    > description yoddu can use markdown sytax
    `}
    >
    {`
    <section class="bs-example">
          <p>预计会有多种panel preview 只是其中一种</p>
          <h3>panel--preview</h3>
          <div class="panel panel--preview">
            <div class="panel__heading">
              panel__heading对对对dddddddaaaaa
            </div>
            <div class="panel__content">
              panel__c4dsdsdsontent ...............
              <br> ..................
            </div>
          </div>
       </section>
    `}
    </Example>
    <Example
    desc={`
    ## Action-Bar
    > description you can use markdown sytax
    `}
    >
    {`
    <section class="bs-example">
        <div class="action-bar">
            <div class="action-bar__info">
                <span class="fi-page-edit-a"></span> message-bar....................
            </div>
            <div class="action-bar__content">
                <button>OK</button>
                <button>Cancel</button>
            </div>
        </div>
    </section>
    `}
    </Example>
    <Example
    desc={`
    ## Function Description
    > description you can use markdown sytax
    `}
    >
    {`
    <section class="bs-example">
          <div class="feature-desc">
            <span class="feature-desc__icon common-img img-32 img-docave-reports"></span>
            <h4>Plan Group</h4>
            <p>Display the plan group information.</p>
          </div>
    </section>  
    `}
    </Example>
    <Example
    desc={`
    ## Summary Table
    > description you can use markdown sytax
    `}
    >
    {`
    <section class="bs-example">
        <div class="summary-table container-fluid">
            <div class="row summary-table__head">
                <div class="col-md-12">PlanName</div>
            </div>
            <div class="row summary-table__body">
                <div class="col-md-3">name</div>
                <div class="col-md-9">descdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdesc</div>
            </div>
              <div class="row summary-table__body">
                <div class="col-md-3">name</div>
                <div class="col-md-9">descdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdesc</div>
            </div>
              <div class="row summary-table__body">
                <div class="col-md-3">name</div>
                <div class="col-md-9">descdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdesc</div>
            </div>
        </div>
    </section>
    `}
    </Example>
    <Example
    desc={`
    ## Button
    > description you can use markdown sytax
    `}
    >
    {`
    <section class="bs-example">
                    <p>button 样式限定</p>
                    <h3>button</h3>
                    <button type="button" class="button button-default">button</button>
                    <button type="button" class="button button-blue">button</button>
                    <button type="button" class="button button-red" disabled="">button</button>
                    <h3>button-link</h3>
                    <button type="button" class="button button-link">button</button>
                    <button type="button" class="button button-link button-blue">button</button>
                    <h3>button-link&underline</h3>
                    <button type="button" class="button button-link"><span class="button-underline">button</span></button>
                    <button type="button" class="button button-link button-blue"><span class="button-underline">button</span></button>
    </section>
    `}
    </Example>
</div>
 ,
  document.getElementById('root')
);
