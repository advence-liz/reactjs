import { Component } from 'react';

export class Tab extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <li role="presentation" className={(this.props.isCurrent ? 'active' : '') + ' nav__item'} onClick={this.props.handleClick}>
                {this.props.children}
            </li>
        );
    }
}

export class Tabs extends Component {
    constructor(props) {
        super(props);
    }

    handleClick(index) {
        this.props.selectedIndexChange(index);
    };

    render() {
        return (
            <ul className={"nav nav-tabs nav-default " + (this.props.type || "")} role="tablist">
                {
                    this.props.tabList.map((tab, index) => {
                        return (
                            <Tab
                                handleClick={this.handleClick.bind(this, index)}
                                isCurrent={(this.props.selectedIndex == index)}
                                key={"tab" + index}
                            >
                                {
                                    tab.template ||
                                    <a>{tab.title}</a>
                                }
                            </Tab>
                        );
                    })
                }
            </ul>
        );
    }
}
export class TabContent extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        if (this.props.type == "ALLDISPLAY") {
            return (
                <div>
                    {
                        this.props.children.map((child, index) => {
                            return <div key={index} style={{ display: this.props.selectedIndex == index ? "block" : "none" }}>{child}</div>
                        })
                    }
                </div>
            );
        } else {
            return (
                <div>
                    {
                        this.props.children[this.props.selectedIndex]
                    }
                </div>
            )
        }
    }
}
//class Demo extends Component {
//    constructor(props) {
//        super(props);
//        this.state.tabList = [
//            { title: 'tab1', template: <CustomTab /> }, your custom component
//            { title: 'tab2', template: <CustomTab /> }
//        ];
//    }
//    selectedIndexChange(index) {
//        this.setState({ selectedIndex: index });
//    };

//    render() {
//        return (
//            <div>
//                <Tabs
//                    tabList={this.state.tabList}
//                    type="nav-stacked"
//                    selectedIndex={this.state.selectedIndex}
//                    selectedIndexChange={this.selectedIndexChange}
//                />
//                <TabContent selectedIndex={this.state.selectedIndex}>
//                    <div className="active tab-content">c1</div>
//                    <div className="tab-content">c2</div>
//                </TabContent>
//            </div>
//        );
//    }
//}

