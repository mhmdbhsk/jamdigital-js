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