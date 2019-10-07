function clock() {
    const fullDate = new Date();
    let jam = fullDate.getHours();
    let menit = fullDate.getMinutes();
    let detik = fullDate.getSeconds();

    if (jam < 10) {
        jam = "0" + jam;
    }
    if (menit < 10) {
        menit = "0" + menit;
    }
    if (detik < 10) {
        detik = "0" + detik;
    }

    document.getElementById("jam").innerHTML = jam;
    document.getElementById("menit").innerHTML = ": " + menit;
    document.getElementById("detik").innerHTML = ": " + detik;
}

setInterval(clock, 100);

/////// NEW CLOCK //////////
function startTime() {
    var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    ap = (hr < 12) ? "<span>AM</span>" : "<span>PM</span>";
    hr = (hr == 0) ? 12 : hr;
    hr = (hr > 12) ? hr - 12 : hr;
    //Add a zero in front of numbers<10
    hr = checkTime(hr);
    min = checkTime(min);
    sec = checkTime(sec);
    document.getElementById("clock").innerHTML = hr + ":" + min + ":" + sec + " " + ap;
    
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var curWeekDay = days[today.getDay()];
    var curDay = today.getDate();
    var curMonth = months[today.getMonth()];
    var curYear = today.getFullYear();
    var date = curWeekDay+", "+curDay+" "+curMonth+" "+curYear;
    document.getElementById("date").innerHTML = date;
    
    var time = setTimeout(function(){ startTime() }, 500);
}
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

////////////// NEW CLOCK 2 /////////////////

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
ctx.strokeStyle = '#28d1fa';
ctx.lineWidth = 7;
ctx.lineCap = 'round';
ctx.shadowBlur = 1;
ctx.shadowColor = '#28d1fa';
function degToRad(degree) {
    var factor = Math.PI/180;
    // returns number of radians
    return degree * factor;
}
function renderTime() {
    //get actual time using date object
    var now = new Date();
    var today = now.toDateString();
    var time = now.toLocaleTimeString();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var milliseconds = now.getMilliseconds();
    // this variable added to keep seconds from jumping and smoothly going around
    var newSeconds = seconds+(milliseconds/1000);
    // Background
    gradient = ctx.createRadialGradient(250,250,5,250,250,300);
    gradient.addColorStop(0,'transparent');
    gradient.addColorStop(1,'transparent');
    ctx.fillStyle = gradient;
    //ctx.fillStyle = '#333';
    ctx.fillRect(0,0,500,500);
    // Hours
    ctx.beginPath();
    ctx.arc(250,250,200, degToRad(270), degToRad((hours*15)-90));
    ctx.stroke();
    // Minutes
    ctx.beginPath();
    ctx.arc(250,250,170, degToRad(270), degToRad((minutes*6)-90));
    ctx.stroke();
    // Seconds
    ctx.beginPath();
    ctx.arc(250,250,140, degToRad(270), degToRad((newSeconds*6)-90));
    ctx.stroke();
    // Date
    ctx.font = '25px Arial';
    ctx.fillStyle = '#28d1fa';
    ctx.fillText(today, 175, 250);
    // Time
    ctx.font = '15px Arial';
    ctx.fillStyle = '#28d1fa';
    ctx.fillText(time, 175, 275);
    var dataUrl = canvas.toDataURL;
    document.getElementById('myImage').src = dataURL;
}
setInterval(renderTime, 40);