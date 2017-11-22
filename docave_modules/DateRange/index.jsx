// public enum JobDateRangeType
// {
//     [Description("All Jobs")]
//     AllJobs = 0,
//     [Description("Last 7 Days")]
//     Last7Days = 1,
//     [Description("Last 14 Days")]
//     Last14Days = 2,
//     [Description("Last 30 Days")]
//     Last30Days = 3,
//     [Description("Customize")]
//     Customize = 4,
//     [Description("Last 24 Hours")]
//     Last24Hours = 5,
// }
const DateRangeSources = [{
    name: 'All Jobs',
    value: 0
}, {
    name: 'Last 7 Hours',
    value: 1
}, {
    name: 'Last 14 Days',
    value: 2
}, {
    name: 'Last 24 Days',
    value: 5
}, {
    name: 'Last 30 Days',
    value: 3
},
{
    name: 'Customize',
    value: 4
}];

export default class DateRange extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTimeZone: $$.I18N.timezones[1],
            disabled: true
        }
        this.DateRangeCustomize = false;
        this.RangeType = null;
        

        this.selectionChanged = this.selectionChanged.bind(this);
        this.dateChanged = this.dateChanged.bind(this);
        this.submit = this.submit.bind(this);
        

    }
    selectionChanged(e, args) {
        let current = args.newValue.item;
        if (current.name === "Customize") {
            this.setState({ disabled: false });
            this.DateRangeCustomize=true;
        } else {
            this.setState({ disabled: true });
            this.DateRangeCustomize=false;
        }
        this.RangeType = current.value;
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
