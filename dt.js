(function () {
    var dateTime = {
        ref: this,
        time: {
            year: 0,
            month: 0,
            date: 0,
            hour: 0,
            minute: 0,
            second: 0
        },
        init: function () {
            var date = new Date();
            dateTime.time.year = date.getFullYear();
            dateTime.time.month = date.getMonth() + 1;
            dateTime.time.date = date.getDate();
            dateTime.time.hour = date.getHours();
            dateTime.time.minute = date.getMinutes();
            dateTime.time.second = date.getSeconds();
        },
        getDate: function (format) {
            if (typeof format !== 'string') return;
            var dateReg = new RegExp("yyyy(/|-)*mm(/|-)dd");
            if (format.match() != null)
                return format
                    .replace("yyyy", dateTime.time.year)
                    .replace("mm", dateTime.time.month)
                    .replace("dd", dateTime.time.date);
        }
    };
    dateTime.init();
    setInterval(function () {
        dateTime.init();
    }, 1000)
    window.dt = dateTime;
})(window);