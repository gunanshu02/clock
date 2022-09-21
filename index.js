setInterval(() => {
    date= new Date()
    htime=date.getHours()
    mtime=date.getMinutes()
    stime=date.getSeconds()
    // console.log(htime +':'+ mtime+':'+ stime)
    hrot= (30*htime) + (0.5*mtime);
    mrot=6*mtime;
    srot=6*stime;
    // console.log(hrot+':'+mrot+':'+srot)

    hours.style.transform=`rotate(${hrot}deg)`;
    minutes.style.transform=`rotate(${mrot}deg)`;
    seconds.style.transform=`rotate(${srot}deg)`;
}, 1000);