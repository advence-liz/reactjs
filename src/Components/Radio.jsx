import React from 'react';
import ReactDOM, { render } from 'react-dom';


class Gender extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            name: 'gender'

        }
    }
    setGender = (event) => {
        this.setState({
            gender: event.target.value
        })
    }
    render() {
        const { defaultChecked } = this.props;
        //const gender = this.state.gender || defaultChecked;
        const gender = this.state.gender;

        return (<div>
            Gender:
            <div>
                <input name={this.state.name}
                    type="radio"
                    checked={gender == "male"}
                   // defaultChecked
                    onChange={this.setGender}
                    value="male"

                /> Male
                <input name={this.state.name}
                    type="radio"
                    checked={gender == "female"}
                    onChange={this.setGender} 
                    value="female"
                /> Female
            </div>
            {"Select Gender: "} {gender}
        </div>)
    }
}
export default Gender;