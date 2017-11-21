const DateRangeSources = [{
    name: 'All Jobs',
    value: 0
}, {
    name: 'Last 24 Hours',
    value: 1
}, {
    name: 'Last 7 Days',
    value: 2
}, {
    name: 'Last 14 Days',
    value: 3
}, {
    name: 'Last 30 Days',
    value: 4
}, {
    name: 'Last 30 Days',
    value: 5
},
{
    name: 'Customize',
    value: 6
}];

export default class DateRange extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTimeZone: $$.I18N.timezones[1],
            disabled: true
        }
        this.selectionChanged = this.selectionChanged.bind(this);
        this.dateChanged = this.dateChanged.bind(this);
        this.submit = this.submit.bind(this);
        

    }
    selectionChanged(e, args) {
        let newValue = args.newValue;
        if (newValue.index === 6) {
            this.setState({ disabled: false })
        } else {
           !this.state.disabled&& this.setState({ disabled: true });
        }
    }
    dateChanged(e, args) {
        console.table(args);
    }
    submit(){

    }
    cancel(){

    }
    render() {
        let combobox = "data-range--combobox",
            rangePicker = "data-range--range-picker",
            dateRangeStyle = {
                width: 320,
                minHeight: 125,
                border: "solid 1px #ababab"
            },
            dateRangeTopStyle = {
                padding: 10,
                border: "solid 1px #e4e4e4"
            },
            dateRangeBottomStyle = {
                textAlign: 'right',
                padding: 5
            }
        return (
            <div className="date-range" style={dateRangeStyle}>
                <div className="date-range--top" style={dateRangeTopStyle}>
                    <label htmlFor={combobox}>Range:</label>
                    <R.Combobox
                        id={combobox}
                        dataTextField="name"
                        dataValueField="value"
                        items={DateRangeSources}
                        selectionChanged={this.selectionChanged}
                        selectedItem={DateRangeSources[0]}
                    />
                    <label htmlFor={rangePicker}>job(s) start during:</label>
                    <R.Rangepicker
                        hasTimePicker={true}
                        hasTimeZone={true}
                        disabled={this.state.disabled}
                        selectionChanged={this.dateChanged}
                        selectedTimeZone={this.state.selectedTimeZone}
                    />
                </div>
                <div className="date-range--bottom" style={dateRangeBottomStyle}>
                    <button type="button" className="button button-default" onClick={this.submit}>OK</button>
                    <button type="button" className="button button-link button-blue button-underline" onClick={this.cancel}>Cancel</button>
                </div>
            </div>
        )
    }
}
