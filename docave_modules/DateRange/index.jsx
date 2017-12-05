const DateRangeTypes = () =>
    [{
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
const ScheduleDateRangeTypes = () =>
    [{
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
    var I18N ={get:function(){}}    
const TickOffset = 621355968000000000;
/**
 * 此方法以date(精确到秒那种）为基准 计算得出目标时区 相同date 的ticks 数 
 * date 相同的话 时区越大 ticks 越小
 * @param {Date} date Date 浏览器端Date对象
 * @param {Number} targetTimezone 目标时区 -12 <= targetTimezone <= +12
 * @description
 * Ticks = Times* 10000 + TickOffset
 * 当 times 为0 时  UTC 时间为"Thu, 01 Jan 1970 00:00:00 GMT"
 *                 +8 时间为 "Thu Jan 01 1970 08:00:00 GMT+0800 (China Standard Time)"
 * UTC.getTimes + cur.getTimezoneOffset = cur.getTimes  //这里成立的条件是 UTC 和 cur 时同一时间 比如都 8点
 * 下面代码中+ currentTimezone - tragetTimezone 是因为 Timezone 和 TimezoneOffset 正负是相反的
 * UTC.getTimes=cur.getTimes+cur.timezone*n //n=60*60*1000 为常量
 * 正常存入后端cur.getTimes 就OK了，前端回显直接通过 times 转为当前Date 对象
 */
function convertDate2Ticks(date, targetTimezone) {
    let currentTimezone = -date.getTimezoneOffset() / 60;
    let times, ticks
    times = date.getTime() + (currentTimezone - targetTimezone) * 60 * 60 * 1000;
    ticks = times * 10000 + TickOffset;
    return ticks;
}
/**
 * 将ticks 转换为目标date
 * ticks 相同的话 目标时区越大 date 越大 浏览器的Date 构造函数 就会将 Times 转为 当前时区 date 对
 * 但是如果 当前时区不等于目标时区 date 就要加减 时区偏移差的小时数 目标大于 当前时区 则加 
 * 但是由于使用 new Date（times） 生成date 对象 所以通过 加上 偏差对应的tiems 数
 * @param {Number} ticks C# ticks
 * @param {Number} targetTimezoneOffset  targetTimezoneOffset
 * @desc Date 方法可以直接将 times 转为当前时区的Date 对象，但是目标时区可能跟当前时区不一样所以需要转化一下
 *  当前时区的times 减去目标时区 偏移的小时 比如 +8 到 -5 就应该减 13 小时
 *  下面俩句相当于 current 转 UTC  TUC转 target
 *  let timezoneOffset = $$.I18N.currentOffset ? $$.I18N.currentOffset - new Date().getTimezoneOffset() : 0;
 *  let currentTimes = times - timezoneOffset * 60 * 1000;
 */
function convertTicks2Date(ticks,targetTimezoneOffset=new Date().getTimezoneOffset()) {
    let times = (ticks - TickOffset) / 10000;
    let timezoneOffset = targetTimezoneOffset - new Date().getTimezoneOffset();
    let currentTimes = times - timezoneOffset * 60 * 1000;
    return new Date(currentTimes);

}
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
        if (current.index == this.currentDateRangeTypes.length - 1) {
            this.setState({ disabled: false });
        } else {
            this.setState({ disabled: true });
        }
        this.setState({ selectedItem: current })
        this.status.RangeType = current.value;
    }
    dateChanged(e, args) {
        try {
            let item = args.newValue;
            let targetTimezone = ~~item.timezone.baseUtcOffset.slice(0, 3);
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
            let timeString = $$.I18N.currentTimeZone.id || now.toTimeString().match(timeReg)[1];
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
                color: this.state.selectedItem.index === this.currentDateRangeTypes.length - 1 ? null : "#AAB3BE"
            }

        return (
            <div className="date-range" style={dateRangeStyle}>
                <div className="date-range--top" style={dateRangeTopStyle}>
                    <div className="row">
                        <div className="col-md-3" style={{ paddingRight: 0, width: 'auto' }}>
                            <label htmlFor={combobox}>{I18N.get("Common.Gui", "Gui.Common_Range:") || "Range"}</label>
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


                    <label htmlFor={rangePicker} style={labelStyle}>{I18N.get("Common.Gui", "Gui.Common_Job(s) start during:") || "Job(s) start during:"}</label>
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
                    <button type="button" className="button button-default" onClick={this.submit} style={{ width: 65 }}>{I18N.get("Common.Gui", "Gui.Common_OK") || "OK"}</button>
                    <button type="button" className="button button-link button-blue button-underline" onClick={this.cancel}>{I18N.get("Common.Gui", "Gui.Common_Cancel") || "Cancel"}</button>
                </div>
            </div>
        )
    }
}
