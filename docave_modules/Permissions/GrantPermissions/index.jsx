import React from 'react';
import ReactDOM, { render } from 'react-dom';
import {Row,Col} from "grid";

export default class GrantPermissions extends React.Component {

    render(){
        return(
            <Row>
                <Col>
                LEFT
                </Col>
                <Col>
                 Right
                </Col>
            </Row>
        )
    }
}