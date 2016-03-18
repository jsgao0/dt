(function () {
    var dateTime = {
        time: {
            year: 0,
            month: 0,
            date: 0,
            hour: 0,
            minute: 0,
            second: 0
        },
        init: function (callback, interval) {
            setInterval(function () {
                dateTime.update();
                callback();
            }, interval)
        },
        update: function () {
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
            var dateReg = new RegExp("(yyyy(/|-))*mm(/|-)dd");
            if (format.match() != null)
                return format
                    .replace("yyyy", dateTime.time.year)
                    .replace("mm", dateTime.time.month)
                    .replace("dd", dateTime.time.date);
        },
        getTime: function (format) {
            if (typeof format !== 'string') return;
            var dateReg = new RegExp("hh:mm:ss");
            if (format.match() != null)
                return format
                    .replace("hh", dateTime.time.hour)
                    .replace("mm", dateTime.time.minute)
                    .replace("ss", dateTime.time.second);
        }
    };

    window.dt = dateTime;
})(window);
