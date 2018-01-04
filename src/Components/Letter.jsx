import React, { Component } from 'react';
// class Letter extends Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         let letterStyle = {
//             padding: 10,
//             margin: 10,
//             backgroundColor: "#ffde00",
//             color: this.props.color || "#333",
//             display: "inline-block",
//             fontFamily: "monospace",
//             fontSize: "32", textAlign: "center"
//         };
//         return (<div style={letterStyle}> {this.props.children} </div>)
//     }

// }

function Letter(props) {
    let letterStyle = {
        padding: 10,
        margin: 10,
        backgroundColor: "#ffde00",
        color: props.color || "#333",
        display: "inline-block",
        fontFamily: "monospace",
        fontSize: "32px", 
        textAlign: "center"
    };
    function handleClick (){

    }
    return (<div style={letterStyle} onClick={handleClick}> {props.children} </div>)
}


export default Letter;