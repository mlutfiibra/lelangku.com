const clear = require("clear")  

const timer = seconds => {
    let mmDD = `${Math.floor(seconds/60)}:${seconds % 60}`
    let format = mmDD.split(":")

    let int = setInterval(function () {
        if (format[1] === 0) {
            clearInterval(int);
        }
        minutes = format[0]
        seconds = format[1]

        if (format[0] < 10) {
            minutes = 0 + "" + format[0]
        }

        if (format[1] < 10) {
            seconds = 0 + "" + format[1]
        }

        clear();
        console.log(`${minutes} : ${seconds}`);
        format[1]--
        if (format[0] > 0 && format[1] === 0) {
            format[0] -= 1
            format[1] = 60
        }
    }, 1000);
};

module.exports = timer
