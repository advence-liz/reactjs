import {convertDate2Ticks,convertTicks2Date} from "DateFormat.jsx";
import { DateRangeTypes,ScheduleDateRangeTypes,getI18N } from "./I18N"

// <DateRange schedule dateRangeFilter={} />
export default class DateRange extends React.Component {
    constructor(props) {
        super(props);
        this.currentDateRangeTypes = this.props.schedule ? ScheduleDateRangeTypes() : DateRangeTypes();
        this.state = {
            selectedTimeZone: $$.I18N.currentTimeZone || this.getSelectedTimeZone(),
            disabled: true,
            selectedItem: this.currentDateRangeTypes[0],
            startDate: null,
            endDate: null

        }
        this.status = {
            FromTime: 0,
            ToTime: 0,
            RangeType: 0
        };
        this.resetState();
        /**
         * 设置 下列三项初始值，当cancel 方法调用时使用
         */
        this.selectedItem = this.state.selectedItem;
        this.startDate = this.state.startDate;
        this.endDate = this.state.endDate;

        this.selectionChanged = this.selectionChanged.bind(this);
        this.dateChanged = this.dateChanged.bind(this);
        this.submit = this.submit.bind(this);
        this.cancel = this.cancel.bind(this);
    }
    /**
     * 根据传入的 dateRangeFilter 设置state对应的属性
     */
    resetState() {
        try {
            Object.assign(this.status, this.props.dateRangeFilter);
            if (!this.status.FromTime) return;
            this.state.startDate = new Date(convertTicks2Date(this.status.FromTime,$$.I18N.currentOffset));
            this.state.endDate = new Date(convertTicks2Date(this.status.ToTime,$$.I18N.currentOffset));

        } catch (e) {

        }

    }
    selectionChanged(e, args) {
        let current = args.newValue;
        if (current.index ==this.currentDateRangeTypes.length-1) {
            this.setState({ disabled: false });
        } else {
            this.setState({ disabled: true ,startDate: null, endDate: null });
        }
        this.setState({ selectedItem: current })
        this.status.RangeType = current.value;
    }
    dateChanged(e, args) {
        try {
            let item = args.newValue;
            let targetTimezone = parseInt(item.timezone.baseUtcOffset.slice(0, 3));
            this.status.FromTime = convertDate2Ticks(item.start, targetTimezone);
            this.status.ToTime = convertDate2Ticks(item.end, targetTimezone);
            this.setState({ startDate: item.start, endDate: item.end });
        } catch (e) {

        }

    }
    submit() {
        /**
         * this.selectedItem 保存提交时的选中状态for cancel 方法恢复之前选中状态
         */
        $(document.body).trigger("mousedown");
        this.selectedItem = this.state.selectedItem;
        this.startDate = this.state.startDate;
        this.endDate = this.state.endDate;
        this.props.submit(this.status);
    }
    cancel() {
        //  this.setState({selectedItem:this.currentDateRangeTypes[0]});
        this.state.selectedItem = Object.create(this.selectedItem);
        this.state.startDate = this.startDate;
        this.state.endDate = this.endDate;
        this.forceUpdate();
        //close popupp
        $(document.body).trigger("mousedown");
    }
    getSelectedTimeZone() {
        try {
            let now = new Date();
            let timeReg = /[\w\W]+\(([\w\W]+)\)/;
            let timeString = $$.I18N.currentTimeZone.id ||now.toTimeString().match(timeReg)[1];
            for (let i = 0; i < $$.I18N.timezones.length; i++) {
                let currentTimeZone = $$.I18N.timezones[i];
                if (currentTimeZone.id === timeString) {
                    return currentTimeZone;
                }
            }
        } catch (e) {

        }
       
        return $$.I18N.timezones[0];

    }
    render() {
        let combobox = "data-range--combobox",
            rangePicker = "data-range--range-picker",
            I18N = getI18N(),
            dateRangeStyle = {
                width: 350,
                minHeight: 130,
                border: "solid 1px #ababab"
            },
            dateRangeTopStyle = {
                padding: 10,
                border: "solid 1px #e4e4e4"
            },
            dateRangeBottomStyle = {
                textAlign: 'right',
                padding: 5,
                background: "#EEFFFF"
            },
            labelStyle = {
                margin: '5px 0px',
                display: 'block',
                color: this.state.selectedItem.index === this.currentDateRangeTypes.length-1 ? null : "#AAB3BE"
            };

        return (
            <div className="date-range" style={dateRangeStyle}>
                <div className="date-range--top" style={dateRangeTopStyle}>
                    <div className="row">
                        <div className="col-md-3" style={{ paddingRight: 0, width: 'auto' }}>
                            <label htmlFor={combobox}>{I18N.rangeLabel}</label>
                        </div>
                        <div className="col-md-6">
                            <R.Combobox
                                id={combobox}
                                dataTextField="name"
                                dataValueField="value"
                                items={this.currentDateRangeTypes}
                                selectionChanged={this.selectionChanged}
                                selectedItem={this.state.selectedItem}
                                width={120}
                            />
                        </div>
                    </div>


                    <label htmlFor={rangePicker} style={labelStyle}>{I18N.duringLabel}</label>
                    <R.Rangepicker
                        hasTimePicker
                        hasTimeZone
                        disabled={this.state.disabled}
                        selectionChanged={this.dateChanged}
                        selectedTimeZone={this.state.selectedTimeZone}
                        selectedStartDate={this.state.startDate}
                        selectedEndDate={this.state.endDate}
                        dateTimeFormat="MM-dd-yy h:mm:ss"
                        width={320}
                    />
                </div>
                <div className="date-range--bottom" style={dateRangeBottomStyle}>
                    <button type="button" className="button button-default" onClick={this.submit} style={{ width: 65 }}>{I18N.ok}</button>
                    <button type="button" className="button button-link button-blue button-underline" onClick={this.cancel}>{I18N.cancel}</button>
                </div>
            </div>
        )
    }
}
