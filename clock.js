function updateClock2() {
    var now = new Date();
    var offset = 18 * 60 * 60 * 1000 + 30 * 60 * 1000;

    var adjustedTime = new Date(now.getTime() + offset);
    updateClockHand("second2", adjustedTime.getSeconds());
    updateClockHand("minute2", adjustedTime.getMinutes(), 60);
    updateClockHand("hour2", adjustedTime.getHours() % 12, 12);

    updateClockTime("clockTime2", adjustedTime.getHours(), adjustedTime.getMinutes(), adjustedTime.getSeconds(), "London: ");
}
function updateClock3() {
    var now = new Date();
    var offset = 3 * 60 * 60 * 1000 + 30 * 60 * 1000; 


    var adjustedTime = new Date(now.getTime() + offset);
    updateClockHand("second3", adjustedTime.getSeconds());
    updateClockHand("minute3", adjustedTime.getMinutes(), 60);
    updateClockHand("hour3", adjustedTime.getHours() % 12, 12);

    updateClockTime("clockTime3", adjustedTime.getHours(), adjustedTime.getMinutes(), adjustedTime.getSeconds(), "Japan: ");
}
function updateClock() {
    var now = new Date();

    updateClockHand("second1", now.getSeconds());
    updateClockHand("minute1", now.getMinutes(), 60);
    updateClockHand("hour1", now.getHours() % 12, 12);

    updateClockTime("clockTime1", now.getHours(), now.getMinutes(), now.getSeconds(),"India: ");
}

function updateClockHand(handId, value, maxValue = 60) {
    var hand = document.getElementById(handId);
    var rotation = (value / maxValue) * 360 - 90;
    hand.style.transform = `rotate(${rotation}deg)`;
}

function updateClockTime(clockTimeId, hours, minutes, seconds,Ss) {
    var clockTime = document.getElementById(clockTimeId);
    var timeString = formatTime(hours, minutes, seconds);
    clockTime.innerText =  Ss  + timeString;
}

function formatTime(hours, minutes, seconds) {
    hours = padZero(hours);
    minutes = padZero(minutes);
    seconds = padZero(seconds);
    return `${hours}:${minutes}:${seconds}`;
}

function padZero(value) {
    return value < 10 ? "0" + value : value;
}




setInterval(updateClock, 1000);
setInterval(updateClock2, 1000);
setInterval(updateClock3, 1000);