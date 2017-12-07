"usestrict"

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

const getI18N = () => {
    return {
        rangeLabel: I18N.get("Common.Gui", "Range:"),
        duringLabel: I18N.get("Common.Gui", "Job(s) start during:"),
        ok: I18N.get("Common.Gui", "OK"),
        cancel: I18N.get("Common.Gui", "Cancel")
    };

}
export { DateRangeTypes, ScheduleDateRangeTypes, getI18N }