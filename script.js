var timer = document.getElementById("timer");
let seconds = 0;
let minutes = 0;
let hours = 0;
var seconds0 = "0" + seconds;
var minutes0 = "0" + minutes;
var hours0 = "0" + hours;
setInterval(function () { 
    seconds++;
    if(seconds==60) {
        minutes++;
        seconds-=60;
    }
    if(minutes==60) {
        hours++;
        minutes-=60;
    }
    if(seconds<10) seconds0 = "0" + seconds;
    else seconds0 = seconds;
    if(minutes<10) minutes0 = "0" + minutes;
    else minutes0 = minutes;
    if(hours<10) hours0 = "0" + hours;
    else minutes0 = minutes;
    timer.textContent = hours0 + ":" + minutes0 + ":" + seconds0;
},1000);


function srodek(){
    document.getElementById("mainPage").classList.add('horizTranslate');
}