import React from 'react';
import ReactDOM, { render } from 'react-dom';
import {Row,Col} from "Grid";

export default class GrantPermissions extends React.Component {

    render(){

        return(
            <div style={{ borderBottom: '1px solid #ddd' }}>
                        <Row>
                            <Col
                                title={`SelectUsers`}
                                desc={`You can enter user names, group names, or e-mail addresses. Separate them with semicolons.`}
                            />
                            <Col>
                                <label htmlFor="">Users/Groups:</label>
                                <textarea name="" id="" cols="30" rows="10"></textarea>
                            </Col>
                        </Row>
                        <Row>
                            <Col
                                title={`Grant Permissions`}
                                desc={`Select the permissions you want these users to have. You can add users to a SharePoint group that has already been granted the appropriate permission levels, or you can grant the users specific permission levels.`}
                            >
                                <p>Adding users to a SharePoint group is recommended, as this makes managing permissions easier across multiple sites.</p>
                            </Col>
                            <Col>
                                <label htmlFor="">
                                    Add users to a SharePoint group (recommended)
                                <input
                                        type="radio"
                                    //  value={this.state.value} 
                                    //  onChange={this.handleChange}
                                    />
                                </label>
                                <label htmlFor="">
                                    Grant users permission directly
                                <input
                                        type="radio"
                                    //  value={this.state.value} 
                                    //  onChange={this.handleChange}
                                    />
                                </label>

                            </Col>
                        </Row>
                        <Row>
                            <Col
                                title={`Send E-Mail`}
                                desc={`Use this option to send e-mail to your new users. You can personalize the message that is sent.`}
                            >
                                <p>Links and information about the site will be added below your personal message.</p>
                            </Col>
                            <Col>
                                <label htmlFor="">
                                    Send welcome e-mail to the new users
                            <input
                                        type="checkbox"
                                    //  value={this.state.value} 
                                    //  onChange={this.handleChange}
                                    />
                                </label>
                                <label htmlFor="">Personal Message:</label>
                                <textarea name="" id="" cols="30" rows="10"></textarea>
                            </Col>
                        </Row>
                    </div>
        )
    }
}
