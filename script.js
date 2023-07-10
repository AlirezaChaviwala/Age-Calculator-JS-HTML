let input = document.getElementById('date-inp');
let output = document.getElementById('dob-display');

let but = document.getElementById('butt');
but.onclick = () => {
    var year = month = days = 0;
    let inp = input.value.split('-');
    let curDate = new Date().getDate();
    let curMonth = new Date().getMonth() + 1;
    let curYear = new Date().getFullYear();
    let curHours = new Date().getHours();
    let curMin = new Date().getMinutes();
    let curSec = new Date().getSeconds();
    let curMilliSec = new Date().getMilliseconds();

    if (inp[0] > curYear) {
        return output.innerText = 'Invalid Input!';
    } else if (inp[1] > curMonth) {
        year = curYear - inp[0] - 1;
        month = 12 - (inp[1] - curMonth + 1);
        days = 30 - inp[2] + curDate;
    } else if (inp[1] < curMonth && inp[2] > curDate) {
        year = curYear - inp[0];
        month = curMonth - inp[1] - 1;
        days = 30 - inp[2] + curDate;
    } else if (inp[1] < curMonth && inp[2] < curDate) {
        year = curYear - inp[0];
        month = curMonth - inp[1];
        days = curDate - inp[2];
    } else if (inp[1] == curMonth && inp[2] > curDate) {
        year = curYear - inp[0] - 1;
        month = 12 - (inp[1] - curMonth + 1);
        days = 30 - inp[2] + curDate;
    } else if (inp[1] == curMonth && inp[2] < curDate) {
        year = curYear - inp[0];
        month = 0;
        days = curDate - inp[2];
    }


    output.innerText = `${year} years ${month} months ${days} days ${curHours} hours ${curMin} minutes
     ${curSec} seconds and ${curMilliSec} milliseconds`;

}
