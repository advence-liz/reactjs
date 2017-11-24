const DateRangeTypes = [{
    name: 'All Jobs',
    value: 0
}, {
    name: 'Last 24 Hours',
    value: 5
}, {
    name: 'Last 7 Days',
    value: 1
}, {
    name: 'Last 14 Days',
    value: 2
}, {
    name: 'Last 30 Days',
    value: 3
},
{
    name: 'Customize',
    value: 4
}];
const ScheduleDateRangeTypes = [{
    name: 'Next 7 Days',
    value: 0
}, {
    name: 'Next 14 Days',
    value: 1
}, {
    name: 'Next 30 Days',
    value: 2
}, {
    name: 'Customize',
    value: 3
}];
/**
 * 
 * @param {Date} date Date 浏览器端Date对象
 * @param {Number} targetOffset 目标偏移量 -12 <= targetOffset <= +12
 */
function convertDate2Ticks(date, targetOffset) {
    let currentTimeZone = -date.getTimezoneOffset() / 60;
    let times, ticks
    times = date.getTime() + (currentTimeZone + targetOffset) * 60 * 60 * 1000;
    ticks = times * 10000 + 621355968000000000;
    return ticks;
}
// <DateRange schedule />
export default class DateRange extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTimeZone: this.getSelectedTimeZone(),
            disabled: true
        }
        this.status = {
            FromTime: 0,
            ToTime: 0,
            RangeType: 0
        };


        this.selectionChanged = this.selectionChanged.bind(this);
        this.dateChanged = this.dateChanged.bind(this);
        this.submit = this.submit.bind(this);
        this.cancel = this.cancel.bind(this);
    }
    selectionChanged(e, args) {
        let current = args.newValue.item;
        if (current.name === "Customize") {
            this.setState({ disabled: false });
        } else {
            this.setState({ disabled: true });
        }
        this.status.RangeType = current.value;
    }
    dateChanged(e, args) {
        try{
            let item = args.newValue;
            let targetOffset = parseInt(item.timezone.baseUtcOffset.slice(0, 3));
            this.status.FromTime = convertDate2Ticks(item.start, targetOffset);
            this.status.ToTime = convertDate2Ticks(item.end, targetOffset);
        }catch(e){

        }
       
    }
    submit() {
        $(document.body).trigger("mousedown");
        this.props.submit(this.status);
    }
    cancel() {
        this.setState({ selectedTimeZone: $$.I18N.timezones[0] });
        //close popupp
        $(document.body).trigger("mousedown");
    }
    getSelectedTimeZone() {
        let now = new Date();
        let timeReg = /[\w\W]+\(([\w\W]+)\)/;
        let timeString = now.toTimeString().match(timeReg)[1];
        for (let i = 0; i < $$.I18N.timezones.length; i++) {
            let currentTimeZone = $$.I18N.timezones[i];
            if (currentTimeZone.id === timeString) {
                return currentTimeZone;
            }
        }
        return $$.I18N.timezones[0];


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
            },
            currentDateRangeTypes = this.props.schedule ? ScheduleDateRangeTypes : DateRangeTypes;
        return (
            <div className="date-range" style={dateRangeStyle}>
                <div className="date-range--top" style={dateRangeTopStyle}>
                    <label htmlFor={combobox}>Range:</label>
                    <R.Combobox
                        id={combobox}
                        dataTextField="name"
                        dataValueField="value"
                        items={currentDateRangeTypes}
                        selectionChanged={this.selectionChanged}
                        selectedItem={currentDateRangeTypes[0]}
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
