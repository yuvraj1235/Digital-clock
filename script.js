let hrs = document.getElementById("hr")
let mins = document.getElementById("mins")
let sec = document.getElementById("sec")
setInterval(() => {
    let currenttime = new Date()
    console.log(currenttime)
    hrs.innerHTML=(currenttime.getHours()<10?"0":"")+currenttime.getHours()
    mins.innerHTML=(currenttime.getMinutes()<10?"0":"")+currenttime.getMinutes()
    sec.innerHTML=(currenttime.getSeconds()<10?"0":"")+currenttime.getSeconds()
    
        
}, 1000);

