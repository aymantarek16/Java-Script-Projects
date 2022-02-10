let digitalClock = ()=>{

    let now = new Date()
    let hours = now.getHours()
    let min = now.getMinutes()   
    let sec = now.getSeconds()
    let date = now.toDateString()
    let am = "Am"

    if(hours > 12) {
        hours = hours -12
        am = "pm"
    }

    if(hours == 0) {
        hours = `12`
       
    }

    if(hours < 10) {
        hours = `0${hours}`
    }

    if(min < 10) {
        min = `0${min}`
    }

    if(sec < 10) {
        sec = `0${sec}`
    }


    let clock = `
    
                <div class="date">
                   ${date}
                </div>


                <div class="time">
                    ${hours} : ${min} : ${sec} ${am}
                </div>

                `

                let clock_container = document.getElementById("clock_container")

                clock_container.innerHTML = clock
}

setInterval( digitalClock , 1000 );
