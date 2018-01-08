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
/**
 * RadioGroup
 * @prop {String} name
 * @prop {String} checkedValue
 * @prop {Function} checkChanged
 * @prop {String} defaultCheckedValue optional when checkedValue undefined use defaultCheckedValue
 * @desc 可选字段
 * @example
 *    <RadioGroup
 *         name="AnonymousUserLevel"
 *         id="AnonymousUserLevel"
 *         items={this.anonymousUserLevelItems}
 *         checkedValue={this.state.anonymousUserLevelChecked}
 *         //defaultCheckedValue={3} optional
 *         checkChanged={this.singleRadioClick}
 *     />
 */