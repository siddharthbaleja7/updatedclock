function date_time() {
        let date = new Date();
        let h = date.getHours();
        let m = date.getMinutes();
        let s = date.getSeconds();

        if (h < 10) {
        h = "0" + h;
        }
        if (m < 10) {
        m = "0" + m;
        }
        if (s < 10) {
        s = "0" + s;
        }

        document.getElementById("s").innerHTML = '' + s;
        document.getElementById("m").innerHTML = '' + m;
        document.getElementById("h").innerHTML = '' + h;
        }

var intervalId;

function start() {
        date_time();
        intervalId = setInterval(date_time, 1000);
}

function stop() {
        clearInterval(intervalId);
}

window.onload = function () {
        start();
}; 
const next = document.querySelector("#next")

next.addEventListener("click",function(){
        window.location.href = "./clock.html"
});
