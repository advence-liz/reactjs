import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { Row, Col } from "Grid";

export default class GrantPermissions extends React.Component {
    constructor(props) {
        super(props)

    }
    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        // this.setState({
        //     [name]: value
        // });
    }

    render() {

        return (
            <div>
                <input type="radio" name="liz" id="" />
                <input type="radio" name="liz" id="" onChange={this.handleInputChange} />
            </div>
        )
    }
}
